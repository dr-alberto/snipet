---
header: Installing Nodejs on Fedora
desc: Node.js is an open-source, cross-platform runtime that allows developers to execute JavaScript on the server side.
lastUpdated: September 28, 2024
urls:
  - title: Nodejs Docs
    url: https://nodejs.org/en/download/package-manager
---

# Installing Node.js on Fedora

1. **Update the package list**:
   
   sudo dnf update

2. **Install Node.js**:
   
   sudo dnf install nodejs

3. **Install npm (Node Package Manager)**:
   
   sudo dnf install npm

4. **Verify the installation**:
   
   node -v
   npm -v
