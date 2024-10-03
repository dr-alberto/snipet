---
header: Installing Docker Compose on Fedora
desc: Docker Compose is a tool for defining and running multi-container Docker applications using a simple YAML file.
lastUpdated: September 28, 2024
urls:
  - title: Docker Compose Docs
    url: https://docs.docker.com/compose/
---

# Installing Docker Compose on Fedora

1. **Download Docker Compose**:
   
   sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d '\"' -f 4)/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

2. **Apply executable permissions**:
   
   sudo chmod +x /usr/local/bin/docker-compose

3. **Verify the installation**:
   
   docker-compose --version
