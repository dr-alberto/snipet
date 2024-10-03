---
header: Installing Homebrew on Windows
desc: Homebrew is a popular, open-source package manager that simplifies software installation on macOS and Linux.
lastUpdated: September 28, 2024
urls:
- title: Homebrew Installation Guide
  url: https://docs.brew.sh/Installation
- title: WSL Installation Guide
  url: https://learn.microsoft.com/en-us/windows/wsl/install
---

# Installing Homebrew on Windows

Homebrew is primarily designed for macOS and Linux. However, you can use it on Windows by installing the Windows Subsystem for Linux (WSL). Here’s how to do it:

1. **Install WSL**:
   - Open **PowerShell** as Administrator (right-click the Start button, then select **Windows Terminal (Admin)**).
   - Run the following command to enable WSL and install the default Linux distribution (Ubuntu):
     ```bash
     wsl --install
     ```
   - Restart your computer if prompted.

2. After the restart, a terminal will open, and Ubuntu (or your chosen Linux distribution) will be installed. Follow the prompts to set up your Linux username and password.

3. Once WSL is installed and configured, open your WSL terminal (e.g., Ubuntu).

4. Follow the installation instructions for your specific Linux distribution:
    - For Ubuntu/Debian-based distributions, follow the instructions [here](/guides/homebrew/install-homebrew-on-ubuntu).
    - For Fedora-based distributions, follow the instructions [here](/guides/homebrew/install-homebrew-on-fedora).
    - For Arch-based distributions, follow the instructions [here](/guides/homebrew/install-homebrew-on-arch).