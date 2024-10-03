---
header: Installing Nginx on Arch Linux
desc: Nginx is a high-performance web server and reverse proxy server that efficiently handles HTTP requests, load balancing, and serving static content.
lastUpdated: September 28, 2024
urls:
  - title: Nginx Docs
    url: https://nginx.org/en/docs/install.html
---

# Installing Nginx on Arch Linux

1. **Update the package list**:
   
   sudo pacman -Syu

2. **Install Nginx**:
   
   sudo pacman -S nginx

3. **Start Nginx**:
   
   sudo systemctl start nginx

4. **Enable Nginx to start on boot**:
   
   sudo systemctl enable nginx

5. **Verify the installation**:
   
   sudo systemctl status nginx

