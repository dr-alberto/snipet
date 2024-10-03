---
header: Installing MongoDB on CentOS
desc: MongoDB is a free, open-source NoSQL database designed for scalability and flexibility, storing data in a document-oriented format using JSON-like structures.
lastUpdated: October 3, 2024
urls:
  - title: MongoDB Docs
    url: https://www.mongodb.com/docs/manual/installation/
---

# Installing MongoDB on CentOS

1. **Install MongoDB**:

sudo yum install -y mongodb-org

2. **Start MongoDB**:

sudo systemctl start mongod

3. **Enable MongoDB on boot**:

sudo systemctl enable mongod

4. **Verify the installation**:

mongod --version
