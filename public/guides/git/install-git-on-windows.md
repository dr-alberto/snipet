---
header: Installing Git on Windows
desc: Git is a free, open-source version control system that tracks changes in source code, enabling collaboration and efficient management of projects.
lastUpdated: October 3, 2024
urls: 
   - title: Git Documentation
     url: https://git-scm.com/doc
---

# Installing Git on Windows

1. **Download Git for Windows**  
   Visit the official Git website to download the Git installer for Windows:  
   [Git for Windows](https://git-scm.com/download/win)

2. **Run the Git Installer**  
   Once the download is complete, double-click the installer to begin the setup.  
   Follow the installation wizard and select the default options unless you have specific requirements. Some important steps include:

   - **Select Components**: You can choose to add Git Bash, Git GUI, and associate `.git` configuration files. It's recommended to keep these selected.
   - **Choosing the Default Editor**: Git will ask which text editor to use by default. You can select the default editor, or choose another one, like VS Code.
   - **Adjusting Your PATH Environment**: Choose the recommended option to use Git from Git Bash only, or from the command prompt as well.

3. **Configure Git**  
   After installation, open **Git Bash** (it will be available in the Start menu) and set your username and email:

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "youremail@example.com"

   ```

4. **Verify the Installation**
   To check if Git is installed correctly, open Git Bash or the Command Prompt and run:

   ```bash
   git --version
   ```
