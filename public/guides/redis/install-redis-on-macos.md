---
header: Installing Redis on macOS
desc: Redis is a in-memory data store used as a database, cache, and message broker, known for its high performance and support for various data structures.
lastUpdated: October 3, 2024
urls:
  - title: Redis Docs
    url: https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/
---

# Installing Redis on macOS

1. **Install Homebrew** (if you haven't already):

   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

2. **Install Redis using Homebrew**:

   brew install redis

3. **Start Redis**:

   brew services start redis

4. **Verify the installation**:

   redis-cli ping
   # Should return "PONG"
