---
header: Installing Let's Encrypt on Arch Linux
desc: Let's Encrypt is a free, automated certificate authority that provides SSL/TLS certificates to enable HTTPS for websites.
lastUpdated: September 28, 2024
urls:
  - title: Let's Encrypt Docs
    url: https://letsencrypt.org/es/docs/
---

# Installing Let's Encrypt on Arch Linux

1. **Update the package list**:
   
   sudo pacman -Syu

2. **Install Certbot**:
   
   sudo pacman -S certbot certbot-apache

3. **Obtain an SSL certificate**:
   
   sudo certbot --apache

4. **Verify the installation**:
   
   sudo certbot renew --dry-run
