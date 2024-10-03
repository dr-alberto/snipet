---
header: Installing PostgreSQL on Ubuntu
desc: PostgreSQL is a powerful, open-source relational database system known for its extensibility, standards compliance, and support for advanced data types and complex queries.
lastUpdated: October 3, 2024
urls:
  - title: PostgreSQL Docs
    url: https://www.postgresql.org/docs/
---

# Installing PostgreSQL on Ubuntu

1. **Update the package list**:

   sudo apt update

2. **Install PostgreSQL**:

   sudo apt install postgresql postgresql-contrib

3. **Start PostgreSQL**:

   sudo systemctl start postgresql

4. **Enable PostgreSQL on boot**:

   sudo systemctl enable postgresql

5. **Verify the installation**:

   psql --version
