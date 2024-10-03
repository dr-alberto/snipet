---
header: Installing MongoDB on Windows
desc: MongoDB is a free, open-source NoSQL database designed for scalability and flexibility, storing data in a document-oriented format using JSON-like structures.
lastUpdated: September 28, 2024
urls:
  - title: MongoDB Docs
    url: https://www.mongodb.com/docs/manual/installation/
---

# Installing MongoDB on Windows

1. **Download MongoDB**:

   Go to the official MongoDB website [MongoDB Downloads](https://www.mongodb.com/try/download/community) and download the Windows installer.

2. **Run the Installer**:

   Double-click the downloaded `.msi` file and follow the installation prompts.

3. **Install MongoDB as a service**:

   During installation, select the option to install MongoDB as a service.

4. **Open Command Prompt**:

   Press `Win + R`, type `cmd`, and hit `Enter`.

5. **Verify the installation**:

   mongod --version
