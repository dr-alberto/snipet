---
header: Installing PostgreSQL on macOS
desc: PostgreSQL is a powerful, open-source relational database system known for its extensibility, standards compliance, and support for advanced data types and complex queries.
lastUpdated: September 28, 2024
urls:
  - title: PostgreSQL Docs
    url: https://www.postgresql.org/docs/
---

# Installing PostgreSQL on macOS

1. **Install Homebrew** (if you haven't already):

   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

2. **Install PostgreSQL**:

   brew install postgresql

3. **Start PostgreSQL**:

   brew services start postgresql

4. **Verify the installation**:

   psql --version
