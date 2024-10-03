---
header: Installing Docker on Fedora
desc: Docker is a free and open-source platform for automating the deployment of applications in lightweight containers.
lastUpdated: October 3, 2024
urls:
  - title: Docker Desktop Docs
    url: https://docs.docker.com/desktop/install/linux/
---

# Installing Docker on Fedora

1. **Update the package list**:
   
   sudo dnf update

2. **Install Docker**:
   
   sudo dnf install docker-ce docker-ce-cli containerd.io

3. **Enable Docker to start at boot**:
   
   sudo systemctl enable docker

4. **Start Docker**:
   
   sudo systemctl start docker

5. **Add your user to the Docker group** (optional but recommended):
   
   sudo usermod -aG docker $USER

   Log out and log back in for changes to take effect.

6. **Verify the installation**:
   
   docker --version
