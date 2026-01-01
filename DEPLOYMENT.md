# Deployment Guide for WeaveAI Website

This guide will walk you through deploying your WeaveAI website to Vercel and connecting your GoDaddy domain (weaveai.us).

## Prerequisites

1. A GitHub account
2. A Vercel account (sign up at https://vercel.com - it's free)
3. Your GoDaddy domain (weaveai.us) already purchased

## Step 1: Push Code to GitHub

1. Initialize a git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: WeaveAI website"
```

2. Create a new repository on GitHub (e.g., `weaveai-website`)

3. Push your code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/weaveai-website.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and sign in (or create an account)

2. Click "Add New Project"

3. Import your GitHub repository:
   - Select your `weaveai-website` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. Wait for the deployment to complete (usually 1-2 minutes)

5. Your site will be live at a URL like: `weaveai-website.vercel.app`

## Step 3: Configure Custom Domain

1. In your Vercel project dashboard, go to **Settings** → **Domains**

2. Add your domain: `weaveai.us`

3. Vercel will show you the DNS records you need to add

## Step 4: Update DNS in GoDaddy

1. Log in to your GoDaddy account

2. Go to **My Products** → **Domains** → Click **DNS** next to `weaveai.us`

3. You have two options:

   **Option A: Use A Record (Recommended)**
   - Delete any existing A records for the root domain
   - Add a new A record:
     - Type: A
     - Name: @ (or leave blank)
     - Value: Vercel will provide the IP address (usually `76.76.21.21`)
     - TTL: 600 (or default)

   **Option B: Use CNAME Record**
   - Delete any existing A records for the root domain
   - Add a new CNAME record:
     - Type: CNAME
     - Name: @ (or leave blank - note: some registrars don't allow CNAME on root)
     - Value: `cname.vercel-dns.com`
     - TTL: 600 (or default)

4. **Important**: If you use Option B and GoDaddy doesn't allow CNAME on root domain, you may need to:
   - Use a subdomain (www.weaveai.us) with CNAME
   - Or use GoDaddy's forwarding feature to redirect root to www

5. Save your DNS changes

## Step 5: SSL Certificate

- Vercel automatically provisions SSL certificates for your domain
- This usually takes a few minutes after DNS propagation
- You can check the status in Vercel's domain settings

## Step 6: Verify Deployment

1. Wait 5-10 minutes for DNS to propagate (can take up to 48 hours, but usually much faster)

2. Visit `https://weaveai.us` in your browser

3. You should see your WeaveAI website live!

## Troubleshooting

### DNS Not Working
- Check DNS propagation: https://dnschecker.org
- Verify DNS records in GoDaddy match Vercel's requirements
- Wait up to 48 hours for full propagation

### SSL Certificate Issues
- Ensure DNS is properly configured
- Wait a few minutes after DNS propagation
- Check Vercel domain settings for certificate status

### Site Not Updating
- Vercel auto-deploys on every push to your main branch
- Check Vercel dashboard for deployment status
- Ensure you're pushing to the correct branch

## Continuous Deployment

Once set up, every time you push code to your GitHub repository's main branch, Vercel will automatically:
- Build your site
- Run tests
- Deploy to production

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- GoDaddy DNS Help: https://www.godaddy.com/help/manage-dns-680
- Vercel Support: Available in your Vercel dashboard

