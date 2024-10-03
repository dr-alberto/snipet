---
header: Installing Apache on macOS
desc: Apache HTTP Server is a popular, open-source web server that powers websites and applications by serving HTTP requests.
lastUpdated: October 3, 2024
urls:
  - title: Apache HTTP Server Docs
    url: https://httpd.apache.org/docs/
---

# Installing Apache on macOS

1. **Open Terminal**: Access your terminal application.

2. **Install Apache**: Use Homebrew to install Apache by running:

   ```bash
   brew install httpd
   ```

3. **Start Apache**: You can start Apache using Homebrew services:

   ```bash
   brew services start httpd
   ```

4. **Check Apache Status**: Verify that Apache is running:

   ```bash
   brew services list
   ```

5. **Access Apache**: Open your web browser and go to http://localhost. If you see the Apache welcome page, the installation was successful.
