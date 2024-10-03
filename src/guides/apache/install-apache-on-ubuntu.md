---
header: Installing Apache on Ubuntu
desc: Apache HTTP Server is a popular, open-source web server that powers websites and applications by serving HTTP requests.
lastUpdated: September 28, 2024
urls:
  - title: Apache HTTP Server Docs
    url: https://httpd.apache.org/docs/
---

# Installing Apache on Ubuntu

1. **Open Terminal**: Access your terminal application.

2. **Update Package Index**: Run the following command to update your package index:

   ```bash
   sudo apt-get update
   ```

3. **Install Apache**: Use the following command to install Apache:

   ```bash
   sudo apt-get install apache2
   ```

4. **Verifying the Installation**:
   - **Check Apache Status**: To verify that Apache is running, use:
     ```bash
     sudo systemctl status apache2
     ```
   - **Access Apache**: Open your web browser and go to http://localhost. If you see the Apache welcome page, the installation was successful.

