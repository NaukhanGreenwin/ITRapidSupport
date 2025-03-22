# Defenda - IT Security Website

A modern, responsive security services website built with React, TypeScript, and TailwindCSS.

## Features

- Responsive design for all device sizes
- Modern UI with animations using Framer Motion
- Contact form with validation
- Performance optimized

## Local Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deploying to Render

This project can be easily deployed to [Render](https://render.com/) using the included `render.yaml` configuration file.

### Option 1: Deploy via GitHub

1. Push your code to a GitHub repository
2. Log in to your Render account
3. Click "New +" button and select "Blueprint"
4. Connect your GitHub account and select this repository
5. Click "Apply Blueprint"
6. Render will automatically deploy your site based on the render.yaml configuration

### Option 2: Manual Deploy

1. Log in to your Render account
2. Click "New +" button and select "Static Site"
3. Connect your GitHub repository or provide a public repository URL
4. Configure the deployment with these settings:
   - **Name**: Your choice (e.g., defenda-website)
   - **Build Command**: `npm ci && npm run build`
   - **Publish Directory**: `dist`
5. Click "Create Static Site"

## Technologies Used

- React
- TypeScript
- TailwindCSS
- Framer Motion
- Vite
- Lucide React icons 