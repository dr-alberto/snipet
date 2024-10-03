---
header: Installing Homebrew on Ubuntu
desc: Homebrew is a popular, open-source package manager that simplifies software installation on macOS and Linux.
lastUpdated: October 3, 2024
urls:
  - title: Homebrew Installation Guide
    url: https://docs.brew.sh/Installation
---

# Installing Homebrew on Ubuntu

1. **Open your Terminal**.

2. **Install the required dependencies** by running the following commands:

   ```bash
   sudo apt-get update
   sudo apt-get install build-essential curl file git
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