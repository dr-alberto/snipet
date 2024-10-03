---
header: Installing MongoDB on macOS
desc: MongoDB is a free, open-source NoSQL database designed for scalability and flexibility, storing data in a document-oriented format using JSON-like structures.
lastUpdated: September 28, 2024
urls:
  - title: MongoDB Docs
    url: https://www.mongodb.com/docs/manual/installation/
---


# Installing MongoDB on macOS

1. **Install Homebrew** (if you haven't already):

   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

2. **Tap the MongoDB formula**:

   brew tap mongodb/brew

3. **Install MongoDB**:

   brew install mongodb-community@6.0

4. **Start MongoDB**:

   brew services start mongodb/brew/mongodb-community

5. **Verify the installation**:

   mongod --version
