#!/bin/bash
# Simple script to push all changes

# Navigate to the project directory
cd /Users/naumankhan/Downloads/Defenda

# Add all files
git add .

# Commit the changes
git commit -m "Fix build issues: remove darkMode and add Toronto page"

# Force push to GitHub
git push -f origin main

echo "All changes pushed to GitHub successfully!" 