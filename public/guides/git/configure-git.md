---
header: Configuring Git
desc: Git is a free, open-source version control system that tracks changes in source code, enabling collaboration and efficient management of projects.
lastUpdated: October 3, 2024
urls: 
   - title: Git Documentation
     url: https://git-scm.com/doc
---

## Configure Git

After installing Git, configure your username and email to associate your commits with your identity:

1. Set your Git username:

   ```bash
   git config --global user.name "Your Name"
   ```

2. Set your Git email:

   ```bash
   git config --global user.email "youremail@example.com"
   ```

3. To verify your settings:
   ```bash
   git config --global --list
   ```
