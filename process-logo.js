/**
 * Script to process main logo: Make it circular with transparent background
 * 
 * Requirements:
 * - sharp package (already installed)
 * 
 * Usage: node process-logo.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const logoFile = path.join(__dirname, 'public', 'WeaveAI.US logo.jpg');
const outputFile = path.join(__dirname, 'public', 'WeaveAI.US logo.png');

async function processLogo() {
  console.log('🔄 Processing main logo to make it circular with transparent background...\n');

  // Check if source file exists
  if (!fs.existsSync(logoFile)) {
    console.error(`❌ Logo file not found: ${logoFile}`);
    return;
  }

  try {
    // Get image dimensions
    const metadata = await sharp(logoFile).metadata();
    const size = Math.min(metadata.width, metadata.height); // Use smaller dimension for square
    console.log(`📐 Original size: ${metadata.width}x${metadata.height}`);
    console.log(`📐 Processing to: ${size}x${size} (circular)\n`);

    // Create a circular mask
    const svgMask = `
      <svg width="${size}" height="${size}">
        <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white"/>
      </svg>
    `;

    // Process the image
    await sharp(logoFile)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
      })
      .composite([
        {
          input: Buffer.from(svgMask),
          blend: 'dest-in'
        }
      ])
      .png({ transparency: true })
      .toFile(outputFile);

    console.log(`✅ Created: ${outputFile}`);
    console.log(`\n💡 Next step: Update code to use "WeaveAI.US logo.png" instead of "WeaveAI.US logo.jpg"`);
    console.log(`   Files to update:`);
    console.log(`   - components/Navbar.tsx`);
    console.log(`   - components/Footer.tsx`);
    console.log(`   - app/layout.tsx (Open Graph images)`);
    console.log(`   - app/about/page.tsx (Open Graph images)`);
    console.log(`   - app/services/page.tsx (Open Graph images)`);
    console.log(`   - app/contact/page.tsx (Open Graph images)`);
    
  } catch (error) {
    console.error(`❌ Error processing logo:`, error.message);
  }
}

processLogo();
