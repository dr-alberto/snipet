---
header: Installing Docker on CentOS
desc: Docker is a free and open-source platform for automating the deployment of applications in lightweight containers.
lastUpdated: October 3, 2024
urls:
  - title: Docker Desktop Docs
    url: https://docs.docker.com/desktop/install/linux/
---

# Installing Docker on CentOS

1. **Uninstall old versions** (if any):
   
   sudo yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine

2. **Set up the repository**:
   
   sudo yum install -y yum-utils
   sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

3. **Install Docker**:
   
   sudo yum install docker-ce docker-ce-cli containerd.io

4. **Start Docker**:
   
   sudo systemctl start docker

5. **Enable Docker to start at boot**:
   
   sudo systemctl enable docker

6. **Add your user to the Docker group** (optional but recommended):
   
   sudo usermod -aG docker $USER

   Log out and log back in for changes to take effect.

7. **Verify the installation**:
   
   docker --version
