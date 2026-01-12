/**
 * Script to process favicons: Make them circular with transparent backgrounds
 * 
 * Requirements:
 * - Install sharp: npm install sharp
 * 
 * Usage: node process-favicons.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('❌ Error: sharp package not found.');
  console.log('\n📦 Please install sharp first:');
  console.log('   npm install sharp');
  console.log('\nOr use an online tool like:');
  console.log('   https://realfavicongenerator.net/');
  console.log('   https://www.favicon-generator.org/');
  process.exit(1);
}

const faviconDir = path.join(__dirname, 'public', 'favicon_io');
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'favicon.ico', size: 32, format: 'ico' },
];

async function createCircularFavicon(inputPath, outputPath, size, format = 'png') {
  try {
    // Create a circular mask
    const svgMask = `
      <svg width="${size}" height="${size}">
        <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white"/>
      </svg>
    `;

    let image = sharp(inputPath)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
      })
      .composite([
        {
          input: Buffer.from(svgMask),
          blend: 'dest-in'
        }
      ]);

    // Handle different formats
    if (format === 'ico') {
      // ICO format - convert PNG to ICO
      await image.png({ transparency: true }).toFile(outputPath.replace('.ico', '-temp.png'));
      // Sharp doesn't directly support ICO, so we'll keep it as PNG for now
      // Most browsers accept PNG favicons anyway
      console.log(`✅ Created: ${outputPath.replace('.ico', '.png')} (ICO format not fully supported, using PNG)`);
    } else {
      await image.png({ transparency: true }).toFile(outputPath);
      console.log(`✅ Created: ${outputPath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
  }
}

async function processFavicons() {
  console.log('🔄 Processing favicons to make them circular with transparent backgrounds...\n');

  // Check if source file exists (use the largest one as source)
  const sourceFile = path.join(faviconDir, 'android-chrome-512x512.png');
  
  if (!fs.existsSync(sourceFile)) {
    console.error(`❌ Source file not found: ${sourceFile}`);
    console.log('Please make sure your favicon files exist in public/favicon_io/');
    return;
  }

  // Create a temporary file for the 512x512 processing
  const tempFile = path.join(faviconDir, 'temp-512.png');

  // Process each size
  for (const { name, size, format } of sizes) {
    const outputPath = path.join(faviconDir, name);
    
    // If processing the source file itself, use temp file
    if (name === 'android-chrome-512x512.png') {
      await createCircularFavicon(sourceFile, tempFile, size, format);
      // Move temp file to final location
      if (fs.existsSync(tempFile)) {
        fs.renameSync(tempFile, outputPath);
      }
    } else {
      await createCircularFavicon(sourceFile, outputPath, size, format);
    }
  }

  console.log('\n✨ Done! All favicons have been processed.');
  console.log('💡 Tip: You may need to clear browser cache to see the changes.');
}

processFavicons();
