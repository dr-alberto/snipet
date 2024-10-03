---
header: Configuring Apache on Ubuntu
desc: Apache HTTP Server is a free and open-source cross-platform web server.
lastUpdated: September 28, 2024
urls:
  - title: Apache HTTP Server Docs
    url: https://httpd.apache.org/docs/
---

# Configuring Apache on Ubuntu

1. **Apache Configuration File**: The main configuration file is located at `/etc/apache2/apache2.conf`. You can edit this file to configure Apache:

   ```bash
   sudo nano /etc/apache2/apache2.conf
   ```

2. **Test Configuration**: After making changes, you can test the configuration for syntax errors by running:

   ```bash
   sudo apachectl configtest
   ```

3. **Reload Apache**: If there are no errors, reload Apache to apply the changes:

   ```bash
   sudo systemctl reload apache2
   ```
