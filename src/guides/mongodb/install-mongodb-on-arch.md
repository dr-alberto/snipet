---
header: Installing MongoDB on Arch Linux
desc: MongoDB is a free, open-source NoSQL database designed for scalability and flexibility, storing data in a document-oriented format using JSON-like structures.
lastUpdated: September 28, 2024
urls:
  - title: MongoDB Docs
    url: https://www.mongodb.com/docs/manual/installation/
---

# Installing MongoDB on Arch Linux

1. **Update the package list**:

   sudo pacman -Syu

2. **Install MongoDB**:

   sudo pacman -S mongodb

3. **Start MongoDB**:

   sudo systemctl start mongodb

4. **Enable MongoDB on boot**:

   sudo systemctl enable mongodb

5. **Verify the installation**:

   mongod --version
