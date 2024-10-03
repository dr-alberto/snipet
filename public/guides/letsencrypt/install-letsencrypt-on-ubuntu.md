---
header: Installing Let's Encrypt on Ubuntu
desc: Let's Encrypt is a free, automated certificate authority that provides SSL/TLS certificates to enable HTTPS for websites.
lastUpdated: October 3, 2024
urls:
  - title: Let's Encrypt Docs
    url: https://letsencrypt.org/es/docs/
---

# Installing Let's Encrypt on Ubuntu

1. **Update the package list**:
   
   sudo apt update

2. **Install Certbot**:
   
   sudo apt install certbot python3-certbot-apache

3. **Obtain an SSL certificate**:
   
   sudo certbot --apache

4. **Verify the installation**:
   
   sudo certbot renew --dry-run

