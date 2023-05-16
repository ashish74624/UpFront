#!/bin/bash

# Build the Next.js project
npm run build

# Navigate to the build output directory
cd out

# Initialize a new Git repository
git init

# Commit all files
git add .
git commit -m "Deploy to GitHub Pages"

# Push the commit to the 'gh-pages' branch of your repository
git push --force --quiet origin master:gh-pages
