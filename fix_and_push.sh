#!/bin/bash
# Fix and push script

# Navigate to the project directory
cd /Users/naumankhan/Downloads/Defenda

# Add the modified files
git add tailwind.config.js src/pages/TorontoSecurityServices.tsx

# Commit the changes
git commit -m "Fix build issues: remove darkMode config and add Toronto page"

# Push to GitHub
git push origin main

echo "Changes pushed to GitHub successfully!" 