---
header: Installing Kubernetes on Fedora
desc: Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications across clusters of machines.
lastUpdated: September 28, 2024
urls:
  - title: Kubernetes Docs
    url: https://kubernetes.io/docs/setup/
---

# Installing Kubernetes on Fedora

1. **Update the package list**:
   
   sudo dnf update

2. **Install curl and other required packages**:
   
   sudo dnf install -y curl conntrack

3. **Download the Google Cloud public signing key**:
   
   sudo rpm --import https://packages.cloud.google.com/yum/doc/yum-key.gpg
   sudo rpm --import https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg

4. **Add the Kubernetes YUM repository**:
   
   cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
   [kubernetes]
   name=Kubernetes
   baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64
   enabled=1
   gpgcheck=1
   gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg
   https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
   EOF

5. **Install Kubernetes components**:
   
   sudo dnf install -y kubelet kubeadm kubectl

6. **Enable and start the kubelet**:
   
   sudo systemctl enable --now kubelet

7. **Verify the installation**:
   
   kubectl version --client
