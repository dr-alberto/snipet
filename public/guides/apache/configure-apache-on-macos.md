---
header: Configuring Apache on macOS
desc: Apache HTTP Server is a popular, open-source web server that powers websites and applications by serving HTTP requests.
lastUpdated: October 3, 2024
urls:
  - title: Apache HTTP Server Docs
    url: https://httpd.apache.org/docs/
---

# Configuring Apache on macOS

1. **Apache Configuration File**: The main configuration file is located at `/usr/local/etc/httpd/httpd.conf`. You can edit this file to configure Apache:

   ```bash
   nano /usr/local/etc/httpd/httpd.conf
   ```

2. **Test Configuration**: After making changes, you can test the configuration for syntax errors by running:

   ```bash
   apachectl configtest
   ```

3. **Reload Apache**: If there are no errors, reload Apache to apply the changes:

   ```bash
   brew services reload httpd
   ```
