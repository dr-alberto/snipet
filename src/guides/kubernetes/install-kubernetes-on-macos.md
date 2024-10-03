---
header: Installing Kubernetes on macOS
desc: Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications across clusters of machines.
lastUpdated: September 28, 2024
urls:
  - title: Kubernetes Docs
    url: https://kubernetes.io/docs/setup/
---

# Installing Kubernetes on macOS

1. **Install Homebrew** (if you haven't already):

   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

2. **Install kubectl**:

   brew install kubectl

3. **Verify the installation**:

   kubectl version --client
