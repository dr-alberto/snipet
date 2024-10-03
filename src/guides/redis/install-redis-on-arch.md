---
header: Installing Redis on Arch Linux
desc: Redis is a in-memory data store used as a database, cache, and message broker, known for its high performance and support for various data structures.
lastUpdated: September 28, 2024
urls:
  - title: Redis Docs
    url: https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/
---

# Installing Redis on Arch Linux

1. **Update the package list**:

   sudo pacman -Syu

2. **Install Redis**:

   sudo pacman -S redis

3. **Enable Redis to start on boot**:

   sudo systemctl enable redis

4. **Start Redis**:

   sudo systemctl start redis

5. **Verify the installation**:

   redis-cli ping
   # Should return "PONG"
