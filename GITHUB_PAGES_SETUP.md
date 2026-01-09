# GitHub Pages Setup - Complete Guide

## Step 1: Configure GitHub Pages Settings

1. Go to your repository: https://github.com/Avinash1604/edifytechsolution
2. Click on **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - **Branch**: This will automatically use the workflow from your repository
5. Click **Save**

## Step 2: Push Your Code

```bash
cd /Users/avinashanv/Documents/project/others/ours/edifytechsolution

# Make sure everything is committed
git add .
git commit -m "Setup GitHub Pages deployment with GitHub Actions"
git push origin main
```

## Step 3: Monitor the Deployment

1. Go to your repository
2. Click on the **Actions** tab
3. You should see "Deploy to GitHub Pages" workflow running
4. Wait for it to complete (usually 1-2 minutes)

## Step 4: Access Your Site

Once the workflow completes successfully, your site will be available at:
```
https://Avinash1604.github.io/edifytechsolution/
```

---

## Verify GitHub Pages is Enabled

To confirm GitHub Pages is properly configured:

1. Repository Settings → Pages
2. You should see a message like:
   - "Your site is live at https://Avinash1604.github.io/edifytechsolution/"
   - Source should be "GitHub Actions"

---

## If the Workflow Fails

Check the error in the Actions tab and try these solutions:

### Build Fails
```bash
# Make sure dependencies are correct
npm install
npm run build
```

### Permissions Error
- Repository Settings → Actions → General
- Under "Workflow permissions", select:
  - ✅ "Read and write permissions"
  - ✅ "Allow GitHub Actions to create and approve pull requests"
- Click Save

### Path Issues
The workflow deploys from: `./dist/edifytechsolution/browser`

Make sure your `angular.json` has the correct `baseHref`:
```json
"baseHref": "/edifytechsolution/"
```

---

## Manual Deployment (If Needed)

If GitHub Actions doesn't work, deploy manually:

```bash
# Build the app
npm run build

# Install deployment tool
npm install -g angular-cli-ghpages

# Deploy
ngh --dir=dist/edifytechsolution/browser --repo=https://github.com/Avinash1604/edifytechsolution.git --branch=gh-pages
```

---

## Troubleshooting Checklist

- [ ] GitHub Pages enabled in Settings
- [ ] Source set to "GitHub Actions"
- [ ] Code pushed to main branch
- [ ] Workflow file exists at `.github/workflows/deploy.yml`
- [ ] Permissions set to "Read and write"
- [ ] `baseHref` set to `/edifytechsolution/` in angular.json
- [ ] Build completes without errors
- [ ] Wait 2-3 minutes for pages to update

---

## Common Issues

**"There isn't a GitHub Pages site here"**
- Solution: Change source from "Deploy from a branch" to "GitHub Actions"
- Make sure the workflow runs successfully

**Build fails with "Cannot find module"**
- Solution: Run `npm install` locally first to verify dependencies

**Page styling broken**
- Solution: Check browser console for 404 errors on static assets
- Verify `baseHref` in angular.json matches your repo name

**Workflow not running**
- Check that you're pushing to `main` branch (or update the workflow)
- Verify the workflow file exists and is valid YAML

---

## Next Steps

Once deployed:
1. Test all links and navigation
2. Check that images load correctly
3. Test the contact form modal
4. Verify responsive design on mobile

Your site is now live! 🎉
