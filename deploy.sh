#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Install Node.js if not found
if ! command_exists node; then
    echo "Node.js not found. Installing..."
    curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Install Git if not found
if ! command_exists git; then
    echo "Git not found. Installing..."
    sudo apt-get install -y git
fi

# Install Netlify CLI if not found
if ! command_exists netlify; then
    echo "Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Clone the existing repository
echo "Cloning your GitHub repository..."
git clone https://github.com/MorokaPrince/May-Rakgama-IT-Web-Dev-Profile.git
cd May-Rakgama-IT-Web-Dev-Profile

# Install project dependencies
echo "Installing dependencies..."
npm install

# Build the React project
echo "Building the project..."
npm run build

# Deploy to Netlify
echo "Deploying to Netlify..."
netlify login
deploy_output=$(netlify deploy --prod)

# Extract the deployed URL from the output
deployedURL=$(echo "$deploy_output" | grep -oP 'Website URL:\s+\K\S+')

# Display the deployed URL
echo "Your site is live at: $deployedURL"

# Create a desktop shortcut for the deployed website
shortcutPath="$HOME/Desktop/Profile Website.desktop"
echo "[Desktop Entry]
Name=Profile Website
Exec=xdg-open $deployedURL
Type=Application
Terminal=false
Icon=web-browser" > "$shortcutPath"
chmod +x "$shortcutPath"

# Open the deployed website
xdg-open "$deployedURL"

echo "Deployment complete! Your online resume is now live."
