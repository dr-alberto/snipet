---
header: Installing Nodejs on Arch Linux
desc: Node.js is an open-source, cross-platform runtime that allows developers to execute JavaScript on the server side.
lastUpdated: October 3, 2024
urls:
  - title: Nodejs Docs
    url: https://nodejs.org/en/download/package-manager
---

# Installing Node.js on Arch Linux

1. **Update the package list**:
   
   sudo pacman -Syu

2. **Install Node.js**:
   
   sudo pacman -S nodejs npm

3. **Verify the installation**:
   
   node -v
   npm -v
