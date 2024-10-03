---
header: Installing MongoDB on Ubuntu
desc: MongoDB is a free, open-source NoSQL database designed for scalability and flexibility, storing data in a document-oriented format using JSON-like structures.
lastUpdated: October 3, 2024
urls:
  - title: MongoDB Docs
    url: https://www.mongodb.com/docs/manual/installation/
---

# Installing MongoDB on Ubuntu

1. **Import the public key**:

   wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

2. **Create a MongoDB list file**:

   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

3. **Update the package list**:

   sudo apt update

4. **Install MongoDB**:

   sudo apt install -y mongodb-org

5. **Start MongoDB**:

   sudo systemctl start mongod

6. **Enable MongoDB on boot**:

   sudo systemctl enable mongod

7. **Verify the installation**:

   mongod --version
