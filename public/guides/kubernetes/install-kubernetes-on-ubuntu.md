---
header: Installing Kubernetes on Ubuntu
desc: Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications across clusters of machines.
lastUpdated: October 3, 2024
urls:
  - title: Kubernetes Docs
    url: https://kubernetes.io/docs/setup/
---

# Installing Kubernetes on Ubuntu

1. **Update the package list**:
   
   sudo apt update

2. **Install curl and apt-transport-https**:
   
   sudo apt install -y curl apt-transport-https

3. **Download the Google Cloud public signing key**:
   
   curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

4. **Add the Kubernetes APT repository**:
   
   sudo bash -c 'cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
   deb https://apt.kubernetes.io/ kubernetes-xenial main
   EOF'

5. **Update the package list again**:
   
   sudo apt update

6. **Install Kubernetes components**:
   
   sudo apt install -y kubelet kubeadm kubectl

7. **Mark them to hold back upgrades**:
   
   sudo apt-mark hold kubelet kubeadm kubectl

8. **Verify the installation**:
   
   kubectl version --client
