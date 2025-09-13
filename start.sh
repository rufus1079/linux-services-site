#!/bin/bash

# Check if node_modules exists; if not, install dependencies
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Check if a production build exists; if not, build it
if [ ! -d ".next" ]; then
  echo "No production build found. Building now..."
  npm run build
fi

# Start the Next.js production server
echo "Starting the website in production mode..."
npm start
