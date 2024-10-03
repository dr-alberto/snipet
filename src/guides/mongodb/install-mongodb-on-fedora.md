---
header: Installing MongoDB on Fedora
desc: MongoDB is a free, open-source NoSQL database designed for scalability and flexibility, storing data in a document-oriented format using JSON-like structures.
lastUpdated: September 28, 2024
urls:
  - title: MongoDB Docs
    url: https://www.mongodb.com/docs/manual/installation/
---

# Installing MongoDB on Fedora

1. **Install MongoDB**:

sudo dnf install -y mongodb-org

2. **Start MongoDB**:

sudo systemctl start mongod

3. **Enable MongoDB on boot**:

sudo systemctl enable mongod

4. **Verify the installation**:

mongod --version
