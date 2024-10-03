---
header: Installing Redis on Ubuntu
desc: Redis is a in-memory data store used as a database, cache, and message broker, known for its high performance and support for various data structures.
lastUpdated: October 3, 2024
urls:
  - title: Redis Docs
    url: https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/
---

# Installing Redis on Ubuntu

1. **Update the package list**:

   sudo apt update

2. **Install Redis**:

   sudo apt install redis-server

3. **Enable Redis to start on boot**:

   sudo systemctl enable redis-server

4. **Start Redis**:

   sudo systemctl start redis-server

5. **Verify the installation**:

   redis-cli ping
   # Should return "PONG"
