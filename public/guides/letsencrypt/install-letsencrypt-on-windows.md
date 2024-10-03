---
header: Installing Let's Encrypt on Ubuntu
desc: Let's Encrypt is a free, automated certificate authority that provides SSL/TLS certificates to enable HTTPS for websites.
lastUpdated: October 3, 2024
urls:
  - title: Let's Encrypt Docs
    url: https://letsencrypt.org/es/docs/
---

# Installing Let's Encrypt on Windows

1. **Download Certbot**:
   
   Visit the [Certbot website](https://certbot.eff.org/) and choose your web server and system to download the appropriate installer.

2. **Install Certbot**:
   
   Follow the installation instructions provided for Windows.

3. **Obtain an SSL certificate**:
   
   Open Command Prompt and run:

   certbot --apache

4. **Verify the installation**:
   
   certbot renew --dry-run
