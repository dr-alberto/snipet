---
header: Installing Let's Encrypt on macOS
desc: Let's Encrypt is a free, automated certificate authority that provides SSL/TLS certificates to enable HTTPS for websites.
lastUpdated: September 28, 2024
urls:
  - title: Let's Encrypt Docs
    url: https://letsencrypt.org/es/docs/
---

# Installing Let's Encrypt on macOS

1. **Install Homebrew** (if you haven't already):
   
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

2. **Install Certbot**:
   
   brew install certbot

3. **Obtain an SSL certificate**:
   
   sudo certbot certonly --standalone

4. **Verify the installation**:
   
   sudo certbot renew --dry-run
