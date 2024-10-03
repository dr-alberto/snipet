---
header: Installing Redis on CentOS
desc: Redis is a in-memory data store used as a database, cache, and message broker, known for its high performance and support for various data structures.
lastUpdated: October 3, 2024
urls:
  - title: Redis Docs
    url: https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/
---

# Installing Redis on CentOS

1. **Install Redis**:

   sudo yum install redis

2. **Enable Redis to start on boot**:

   sudo systemctl enable redis

3. **Start Redis**:

   sudo systemctl start redis

4. **Verify the installation**:

   redis-cli ping
   # Should return "PONG"
