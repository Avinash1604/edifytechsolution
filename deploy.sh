#!/bin/bash

# EdifyTechSolutions - GitHub Pages Deployment Script
# This script builds the Angular app and deploys it to GitHub Pages

set -e

echo "🚀 Starting GitHub Pages Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Git not initialized. Please run: git init${NC}"
    exit 1
fi

# Check if we have uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  You have uncommitted changes. Committing them now...${NC}"
    git add .
    git commit -m "chore: update before deployment"
fi

echo -e "${YELLOW}📦 Building the Angular application...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed. Please fix the errors and try again.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully!${NC}"

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Distribution folder not found. Build may have failed.${NC}"
    exit 1
fi

echo -e "${YELLOW}📤 Deploying to GitHub Pages...${NC}"

# Install angular-cli-ghpages if not already installed
if ! npm list -g angular-cli-ghpages > /dev/null 2>&1; then
    echo -e "${YELLOW}Installing angular-cli-ghpages...${NC}"
    npm install -g angular-cli-ghpages
fi

# Deploy to GitHub Pages
ngh --dir=dist/edifytechsolution/browser --repo=https://github.com/Avinash1604/edifytechsolution.git --branch=gh-pages

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}Your site is now live at: https://Avinash1604.github.io/edifytechsolution/${NC}"
else
    echo -e "${RED}❌ Deployment failed. Please check the errors above.${NC}"
    exit 1
fi
