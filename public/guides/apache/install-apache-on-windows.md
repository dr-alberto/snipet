---
header: Installing Apache on Windows
desc: Apache HTTP Server is a popular, open-source web server that powers websites and applications by serving HTTP requests.
lastUpdated: October 3, 2024
urls:
  - title: Apache HTTP Server Docs
    url: https://httpd.apache.org/docs/
---

# Installing Apache on Windows

1. **Download Apache**: Go to the official Apache Lounge website [Apache Lounge](https://www.apachelounge.com/download/) and download the latest version of Apache HTTP Server for Windows (usually in a ZIP format).

2. **Extract the Files**: Once downloaded, extract the ZIP file to a directory on your computer (e.g., `C:\Apache24`).

3. **Open Command Prompt**: Press `Win + R`, type `cmd`, and hit `Enter`.

4. **Navigate to the Apache bin Directory**: Change the directory to the Apache `bin` folder. For example:

   ```bash
   cd C:\Apache24\bin
   ```

5. **Install Apache as a Service**: Run the following command to install Apache as a Windows service:

   ```bash
   httpd -k install
   ```
