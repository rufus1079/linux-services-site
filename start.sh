#!/bin/bash

# Check if node_modules exists; if not, install dependencies
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Start the Next.js development server
echo "Starting the website..."
npm run dev
