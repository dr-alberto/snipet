---
header: Uninstalling Homebrew
desc: Homebrew is a popular, open-source package manager that simplifies software installation on macOS and Linux.
lastUpdated: September 28, 2024
urls:
  - title: Homebrew Installation Guide
    url: https://docs.brew.sh/Installation#uninstallation
---

# Uninstalling Homebrew

1. **Open your Terminal**.

2. **Run the uninstall script**. Execute the following command to remove Homebrew and all its associated files:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
   ```

3. **Follow the on-screen instructions**. The script will prompt you to confirm the uninstallation. Type `y` or `yes` when asked to proceed.

4. **Remove Homebrew from your shell configuration**. Open your `.bashrc` file in a text editor and remove the following line (if it exists):
   ```bash
   eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
   ```

5. **Reload your shell configuration**. After editing the file, run the following command to apply the changes:
   ```bash
   source ~/.bashrc
   ```

6. **Verify that Homebrew has been removed** by running:
   ```bash
   brew --version
   ```
   If Homebrew has been successfully uninstalled, you should see a message indicating that the command is not found.

