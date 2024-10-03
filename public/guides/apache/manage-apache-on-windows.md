---
header: Managing Apache on Windows
desc: Apache HTTP Server is a popular, open-source web server that powers websites and applications by serving HTTP requests.
lastUpdated: October 3, 2024
urls:
  - title: Apache HTTP Server Docs
    url: https://httpd.apache.org/docs/
---

# Managing and Stopping Apache

1. **Start Apache**: To start the Apache service, run:

   ```bash
   httpd -k start
   ```

2. **Stop Apache**: To stop the Apache service, run:

   ```bash
   httpd -k stop
   ```

3. **Restart Apache**: To restart Apache, run:

   ```bash
   httpd -k restart
   ```

4. **Check Apache Status**: To check if Apache is running, you can look for the Apache process in the Task Manager or check if the service is running by typing:

   ```bash
   httpd -k status
   ```

5. **Uninstall Apache as a Service**: If you want to uninstall Apache as a service, run:

   ```bash
   httpd -k uninstall
   ```
