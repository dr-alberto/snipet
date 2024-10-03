---
header: Installing Redis on Windows
desc: Redis is a in-memory data store used as a database, cache, and message broker, known for its high performance and support for various data structures.
lastUpdated: October 3, 2024
urls:
  - title: Redis Docs
    url: https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/
---

# Installing Redis on Windows

1. **Download Redis for Windows**:

   Download the precompiled Redis binaries from [Redis' Website](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/).

2. **Extract the files**:

   Unzip the downloaded file to a directory (e.g., `C:\Redis`).

3. **Run Redis Server**:

   Open Command Prompt and navigate to the Redis directory:

   ```bash
   cd C:\Redis
   redis-server.exe
   ```

4. **Verify the installation**:

   Open another Command Prompt window, and run:

    ```bash
    cd C:\Redis
    redis-cli.exe ping
    # Should return "PONG"
    ```
