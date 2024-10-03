---
header: Installing PostgreSQL on Fedora
desc: PostgreSQL is a powerful, open-source relational database system known for its extensibility, standards compliance, and support for advanced data types and complex queries.
lastUpdated: October 3, 2024
urls:
  - title: PostgreSQL Docs
    url: https://www.postgresql.org/docs/
---

# Installing PostgreSQL on Fedora

1. **Update the package list**:

   sudo dnf update

2. **Install PostgreSQL**:

   sudo dnf install postgresql postgresql-server

3. **Initialize the database**:

   sudo postgresql-setup --initdb

4. **Start PostgreSQL**:

   sudo systemctl start postgresql

5. **Enable PostgreSQL on boot**:

   sudo systemctl enable postgresql

6. **Verify the installation**:

   psql --version
