---
header: Installing Homebrew on CentOS
desc: Homebrew is a popular, open-source package manager that simplifies software installation on macOS and Linux.
lastUpdated: September 28, 2024
urls:
  - title: Homebrew Installation Guide
    url: https://docs.brew.sh/Installation
---

# Installing Homebrew on CentOS

1. **Open your Terminal**.

2. **Install the required dependencies** by running the following commands:

   ```bash
   sudo yum groupinstall 'Development Tools'
   sudo yum install curl file git
   ```

3. **Install Homebrew** by running the following command:

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

4. **Follow the on-screen instructions** to complete the installation.

5. **Verify the installation** by running:

   ```bash
   brew --version
   ```

6. If prompted, **add Homebrew to your PATH** by adding the following to your shell profile (e.g., `~/.bashrc` or `~/.bash_profile`):

   ```bash
   echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.bashrc
   eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
   ```
