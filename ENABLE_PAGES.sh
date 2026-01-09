#!/bin/bash

# GitHub Pages Manual Setup Script
# This script provides instructions to manually enable GitHub Pages

echo "=================================="
echo "GitHub Pages Setup Instructions"
echo "=================================="
echo ""

echo "✅ Step 1: Go to Repository Settings"
echo "   URL: https://github.com/Avinash1604/edifytechsolution/settings"
echo ""

echo "✅ Step 2: Find 'Pages' in Left Sidebar"
echo "   Scroll down and click on 'Pages'"
echo ""

echo "✅ Step 3: Configure Pages Settings"
echo "   Under 'Build and deployment' section:"
echo "   "
echo "   Option A (Recommended - From Branch):"
echo "   - Source: Deploy from a branch"
echo "   - Branch: gh-pages"
echo "   - Folder: / (root)"
echo "   - Click 'Save'"
echo ""
echo "   Option B (Alternative - GitHub Actions):"
echo "   - Source: GitHub Actions"
echo "   - Click 'Save'"
echo ""

echo "✅ Step 4: Wait for Confirmation"
echo "   After saving, you should see:"
echo "   'Your site is live at https://avinash1604.github.io/edifytechsolution/'"
echo ""

echo "✅ Step 5: Clear Cache and Refresh"
echo "   - Hard refresh your browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)"
echo "   - Wait 1-2 minutes for DNS propagation"
echo "   - Try again: https://avinash1604.github.io/edifytechsolution/"
echo ""

echo "=================================="
echo "Manual Verification"
echo "=================================="
echo ""
echo "If you prefer, you can also manually verify the gh-pages branch:"
echo ""
echo "Current branches:"
git branch -a
echo ""
echo "Files in gh-pages branch:"
git ls-tree -r gh-pages | head -20
echo ""

echo "=================================="
echo "Need Help?"
echo "=================================="
echo "If GitHub Pages still doesn't work:"
echo ""
echo "1. Check repository visibility:"
echo "   Settings → Danger Zone → Change repository visibility (must be PUBLIC)"
echo ""
echo "2. Check Actions permissions:"
echo "   Settings → Actions → General"
echo "   → Workflow permissions: 'Read and write permissions'"
echo ""
echo "3. Try the alternative workflow:"
echo "   Push to main with: git push origin main"
echo "   GitHub Actions will run and redeploy automatically"
echo ""

echo "✅ All done! Your site files are deployed to gh-pages branch."
echo "   Just enable GitHub Pages in your repository settings."
