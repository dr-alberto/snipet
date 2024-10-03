---
header: Installing Docker on Ubuntu
desc: Docker is a free and open-source platform for automating the deployment of applications in lightweight containers.
lastUpdated: September 28, 2024
urls:
  - title: Docker Desktop Docs
    url: https://docs.docker.com/desktop/install/linux/
---

# Installing Docker on Ubuntu

1. **Update the package list**:

   ```bash
   sudo apt update
   ```

2. **Install necessary packages**:

   ```bash
   sudo apt install apt-transport-https ca-certificates curl software-properties-common
   ```

3. **Add Docker’s official GPG key**:

   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   ```

4. **Add the Docker repository**:

   ```bash
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   ```

5. **Update the package list again**:

   ```bash
   sudo apt update
   ```

6. **Install Docker**:

   ```bash
   sudo apt install docker-ce
   ```

7. **Add your user to the Docker group to run Docker without `sudo`** (optional but recommended):

   ```bash
   sudo usermod -aG docker $USER
   ```

   Log out and log back in for the changes to take effect.

8. **Verify the installation**:

   ```bash
   docker --version
   ```
