---
header: Installing Nginx on macOS
desc: Nginx is a high-performance web server and reverse proxy server that efficiently handles HTTP requests, load balancing, and serving static content.
lastUpdated: October 3, 2024
urls:
  - title: Nginx Docs
    url: https://nginx.org/en/docs/install.html
---

# Installing Nginx on macOS

1. **Install Homebrew** (if you haven't already):
   
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

2. **Install Nginx**:
   
   brew install nginx

3. **Start Nginx**:
   
   brew services start nginx

4. **Verify the installation**:
   
   brew services list

