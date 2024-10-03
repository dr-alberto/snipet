---
header: Installing Nodejs on CentOS
desc: Node.js is an open-source, cross-platform runtime that allows developers to execute JavaScript on the server side.
lastUpdated: September 28, 2024
urls:
  - title: Nodejs Docs
    url: https://nodejs.org/en/download/package-manager
---

# Installing Node.js on CentOS

1. **Enable the NodeSource repository**:
   
   curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -

2. **Install Node.js**:
   
   sudo yum install nodejs

3. **Verify the installation**:
   
   node -v
   npm -v
