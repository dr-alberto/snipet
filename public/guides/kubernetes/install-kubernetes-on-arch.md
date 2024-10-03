---
header: Installing Kubernetes on Arch Linux
desc: Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications across clusters of machines.
lastUpdated: October 3, 2024
urls:
  - title: Kubernetes Docs
    url: https://kubernetes.io/docs/setup/
---

# Installing Kubernetes on Arch Linux

1. **Install Kubernetes**:
   
   sudo pacman -S kubectl kubeadm kubelet

2. **Enable and start the kubelet**:
   
   sudo systemctl enable --now kubelet

3. **Verify the installation**:
   
   kubectl version --client
