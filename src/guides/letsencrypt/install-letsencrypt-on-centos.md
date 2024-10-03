---
header: Installing Let's Encrypt on CentOS
desc: Let's Encrypt is a free, automated certificate authority that provides SSL/TLS certificates to enable HTTPS for websites.
lastUpdated: September 28, 2024
urls:
  - title: Let's Encrypt Docs
    url: https://letsencrypt.org/es/docs/
---

# Installing Let's Encrypt on CentOS

1. **Enable the EPEL repository**:
   
   sudo yum install epel-release

2. **Update the package list**:
   
   sudo yum update

3. **Install Certbot**:
   
   sudo yum install certbot python2-certbot-apache

4. **Obtain an SSL certificate**:
   
   sudo certbot --apache

5. **Verify the installation**:
   
   sudo certbot renew --dry-run
