---
header: Installing Git on CentOS
desc: Git is a free, open-source version control system that tracks changes in source code, enabling collaboration and efficient management of projects.
lastUpdated: September 28, 2024
urls: 
   - title: Git Documentation
     url: https://git-scm.com/doc
---

# Installing Git on CentOS

1. Install the **Extra Packages for Enterprise Linux (EPEL)** if needed:

   ```bash
   sudo yum install epel-release
   ```

2. Install Git:

   ```bash
   sudo yum install git
   ```

3. Verify the installation:
   ```bash
   git --version
   ```
