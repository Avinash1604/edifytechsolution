# 🚀 Quick Start: Deploy to GitHub Pages in 3 Steps

## Step 1: Push Your Code to GitHub

```bash
cd /Users/avinashanv/Documents/project/others/ours/edifytechsolution
git add .
git commit -m "Initial commit: EdifyTechSolutions website with all updates"
git push origin main
```

## Step 2: Enable GitHub Pages in Repository Settings

1. Go to: https://github.com/Avinash1604/edifytechsolution/settings/pages
2. Under "Source", select: **"Deploy from a branch"**
3. Select branch: **`gh-pages`**
4. Select folder: **`/ (root)`**
5. Click **"Save"**

## Step 3: Wait for Automatic Deployment

The GitHub Actions workflow will automatically:
- ✅ Install dependencies
- ✅ Build your Angular app
- ✅ Deploy to GitHub Pages

Check progress in the **Actions** tab.

## 🎉 Your Site is Live!

Once complete, visit: **https://Avinash1604.github.io/edifytechsolution/**

---

## Alternative: Manual Deployment

If automatic deployment doesn't work, use the manual script:

```bash
# Make the script executable
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

---

## Troubleshooting

**Site not showing?**
- Clear browser cache (Ctrl+Shift+R)
- Wait 1-2 minutes for GitHub Pages to update
- Check the repository settings

**Build error?**
- Run `npm install` to install dependencies
- Check the Actions tab for error details

**Page styling looks broken?**
- The `baseHref` has been set to `/edifytechsolution/`
- This may need adjustment if paths are wrong

---

For detailed guide, see: [DEPLOYMENT.md](./DEPLOYMENT.md)
