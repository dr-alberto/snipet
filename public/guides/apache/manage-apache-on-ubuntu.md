---
header: Managing Apache on Ubuntu
desc: Apache HTTP Server is a popular, open-source web server that powers websites and applications by serving HTTP requests.
lastUpdated: October 3, 2024
urls:
  - title: Apache HTTP Server Docs
    url: https://httpd.apache.org/docs/
---

# Managing Apache on Ubuntu

1. **Start Apache**: To start Apache, run the following command:

   ```bash
   sudo systemctl start apache2
   ```

2. **Stop Apache**: To stop Apache, run:

   ```bash
   sudo systemctl stop apache2
   ```

3. **Restart Apache**: To restart Apache, run:

   ```bash
   sudo systemctl restart apache2
   ```

4. **Enable Apache on Boot**: To ensure that Apache starts on boot, run:

   ```bash
   sudo systemctl enable apache2
   ```

5. **Check Apache Status**: Verify that Apache is running:
   ```bash
   sudo systemctl status apache2
   ```