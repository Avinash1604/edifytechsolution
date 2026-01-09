# GitHub Pages Deployment Guide - EdifyTechSolutions

This guide explains how to deploy your Angular application to GitHub Pages.

## Prerequisites

- Git installed and configured
- GitHub account with the repository already created
- Node.js and npm installed
- Repository cloned locally

## Option 1: Automatic Deployment with GitHub Actions (Recommended)

GitHub Actions will automatically build and deploy your site whenever you push to the main branch.

### Setup Steps:

1. **Ensure the workflow file exists**
   - The file `.github/workflows/deploy.yml` should already be in your repository

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: EdifyTechSolutions website"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to: https://github.com/Avinash1604/edifytechsolution/settings/pages
   - Under "Source", select: "Deploy from a branch"
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
   - Click "Save"

4. **Wait for deployment**
   - Go to "Actions" tab in your repository
   - Watch the deployment workflow run
   - Once complete, your site will be live at: `https://Avinash1604.github.io/edifytechsolutions/`

## Option 2: Manual Deployment with Script

Use the provided deployment script for manual builds and deployment.

### Setup Steps:

1. **Make the script executable**
   ```bash
   chmod +x deploy.sh
   ```

2. **Install global dependencies**
   ```bash
   npm install -g angular-cli-ghpages
   ```

3. **Configure angular.json for base href**
   - Edit `angular.json` and update the base href:
   ```json
   "baseHref": "/edifytechsolution/"
   ```

4. **Run the deployment script**
   ```bash
   ./deploy.sh
   ```

## Option 3: Manual Step-by-Step Deployment

If you prefer complete control:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Install deployment tool**
   ```bash
   npm install -g angular-cli-ghpages
   ```

3. **Deploy to GitHub Pages**
   ```bash
   ngh --dir=dist/edifytechsolution/browser --repo=https://github.com/Avinash1604/edifytechsolution.git --branch=gh-pages
   ```

## Verify Deployment

After deployment, your site will be available at:
- **URL**: https://Avinash1604.github.io/edifytechsolutions/

## Common Issues & Solutions

### Issue: Build fails with "Cannot find module"
**Solution**: Run `npm install` to ensure all dependencies are installed

### Issue: Deployment script not found
**Solution**: Make sure you're in the project root directory and the script has execute permissions

### Issue: GitHub Pages not updating
**Solution**: 
1. Check the GitHub Actions tab for deployment errors
2. Verify the gh-pages branch exists in your repository
3. Clear browser cache and do a hard refresh (Ctrl+Shift+R)

### Issue: Base href not working correctly
**Solution**: Update the `baseHref` in `angular.json` to match your repository name:
```json
"baseHref": "/edifytechsolution/"
```

## Continuous Deployment (Recommended)

With GitHub Actions enabled, deployment happens automatically:

1. Make changes to your code
2. Commit and push to main branch
3. GitHub Actions automatically:
   - Installs dependencies
   - Builds the application
   - Deploys to GitHub Pages
4. Your changes are live within 1-2 minutes

## Custom Domain Setup (Optional)

To use a custom domain (e.g., edifytechsolutions.com):

1. Update the `cname` field in `.github/workflows/deploy.yml`
2. Add DNS records to your domain registrar pointing to GitHub Pages
3. Enable custom domain in GitHub Pages settings

## Rollback to Previous Version

If you need to revert to a previous deployment:

1. Find the commit you want to rollback to
2. Run:
   ```bash
   git revert <commit-hash>
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and redeploy

## Support & Documentation

- [GitHub Pages Documentation](https://pages.github.com/)
- [Angular Build Documentation](https://angular.io/guide/build)
- [angular-cli-ghpages Documentation](https://github.com/angular-schule/angular-cli-ghpages)
