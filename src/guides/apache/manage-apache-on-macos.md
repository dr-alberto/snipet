---
header: Managing Apache on macOS
desc: Apache HTTP Server is a popular, open-source web server that powers websites and applications by serving HTTP requests.
lastUpdated: September 28, 2024
urls:
  - title: Apache HTTP Server Docs
    url: https://httpd.apache.org/docs/
---

# Managing Apache on macOS

1. **Start Apache**: To start Apache, run the following command:

   ```bash
   brew services start httpd
   ```

2. **Stop Apache**: To stop Apache, run:

   ```bash
   brew services stop httpd
   ```

3. **Restart Apache**: To restart Apache, run:

   ```bash
   brew services restart httpd
   ```

4. **Check Apache Status**: To verify that Apache is running, use:

```bash
brew services list
```
