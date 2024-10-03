---
header: Installing Docker on Arch Linux
desc: Docker is a free and open-source platform for automating the deployment of applications in lightweight containers.
lastUpdated: October 3, 2024
urls:
  - title: Docker Desktop Docs
    url: https://docs.docker.com/desktop/install/linux/
---

# Installing Docker on Arch Linux

1. **Update package list** (optional but recommended):
   
   sudo pacman -Syu

2. **Install Docker**:
   
   sudo pacman -S docker

3. **Enable Docker to start at boot**:
   
   sudo systemctl enable docker

4. **Start Docker**:
   
   sudo systemctl start docker

5. **Add your user to the Docker group** (optional but recommended):
   
   sudo usermod -aG docker $USER

   Log out and log back in for changes to take effect.

6. **Verify the installation**:
   
   docker --version
