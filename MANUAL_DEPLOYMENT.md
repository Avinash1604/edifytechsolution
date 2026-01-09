# Manual GitHub Pages Setup - Complete Solution

If the automated workflow is having issues, follow these manual steps:

## Solution 1: Manual Setup Using Git Commands

### Step 1: Install angular-cli-ghpages globally
```bash
npm install -g angular-cli-ghpages
```

### Step 2: Build your application
```bash
cd /Users/avinashanv/Documents/project/others/ours/edifytechsolution
npm run build
```

### Step 3: Deploy to GitHub Pages
```bash
ngh --dir=dist/edifytechsolution/browser --branch=gh-pages --repo=https://github.com/Avinash1604/edifytechsolution.git
```

When prompted, enter your GitHub credentials.

### Step 4: Enable GitHub Pages in Repository Settings
1. Go to: https://github.com/Avinash1604/edifytechsolution/settings/pages
2. Under "Source", select: **"Deploy from a branch"**
3. Select branch: **`gh-pages`**
4. Select folder: **`/ (root)`**
5. Click **Save**

### Step 5: Access Your Site
Your site will be live at: **https://Avinash1604.github.io/edifytechsolution/**

---

## Solution 2: Use the Alternative GitHub Actions Workflow

If the primary workflow keeps failing:

1. The alternative workflow is at: `.github/workflows/deploy-alt.yml`
2. It uses `peaceiris/actions-gh-pages` which is more reliable
3. Push your code:
   ```bash
   git add .
   git commit -m "Use alternative deployment workflow"
   git push origin main
   ```

4. Go to Actions tab and monitor the workflow
5. After successful deployment, enable GitHub Pages as in Solution 1, Step 4

---

## Solution 3: Quick Deploy Script

Create a file called `quick-deploy.sh`:

```bash
#!/bin/bash

echo "🔨 Building the application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "📤 Deploying to GitHub Pages..."
npx ngh --dir=dist/edifytechsolution/browser --branch=gh-pages --repo=https://github.com/Avinash1604/edifytechsolution.git

echo "✅ Deployment complete!"
echo "🌐 Visit: https://Avinash1604.github.io/edifytechsolution/"
```

Make it executable and run:
```bash
chmod +x quick-deploy.sh
./quick-deploy.sh
```

---

## Verification Checklist

After deployment, verify these things:

- [ ] Visit: https://Avinash1604.github.io/edifytechsolution/
- [ ] Page loads without 404 errors
- [ ] CSS and styling is applied correctly
- [ ] Images load properly
- [ ] Navigation links scroll to correct sections
- [ ] "Get Started" button opens the modal
- [ ] Contact form works

---

## Repository Settings After Deployment

Go to: https://github.com/Avinash1604/edifytechsolution/settings/pages

You should see:
- ✅ GitHub Pages is enabled
- ✅ Source: "Deploy from a branch"
- ✅ Branch: "gh-pages" (or "main /docs")
- ✅ Your site URL displayed

---

## Troubleshooting

### Error: "Cannot find module"
```bash
npm install
npm run build
```

### Error: "gh-pages branch not found"
The branch will be created automatically on first deployment

### Error: "Not Found" / "enablement: false"
Try Solution 2 (alternative workflow) which doesn't require pre-enabling Pages

### Site shows 404
- Clear browser cache: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Wait 2-3 minutes for pages to update
- Check that baseHref is correct in angular.json

### Old site showing
- The cache might need clearing
- Or the deployment might still be in progress
- Wait 5 minutes and try again

---

## Recommended Order

1. **Try Solution 1 first** (Manual git commands) - Most reliable
2. **If that works**, enable GitHub Pages in settings
3. **If manual fails**, try Solution 2 (Alternative workflow)
4. **As last resort**, use Solution 3 (Quick deploy script)

---

## Getting Help

If you still have issues:

1. Check the Actions tab for detailed error messages
2. Verify all dependencies: `npm install`
3. Test build locally: `npm run build`
4. Check GitHub token has correct permissions
5. Verify repository is public (GitHub Pages for private repos requires GitHub Pro)

---

Your site will be deployed and live at:
```
https://Avinash1604.github.io/edifytechsolution/
```
