---
header: Installing PostgreSQL on Arch Linux
desc: PostgreSQL is a powerful, open-source relational database system known for its extensibility, standards compliance, and support for advanced data types and complex queries.
lastUpdated: September 28, 2024
urls:
  - title: PostgreSQL Docs
    url: https://www.postgresql.org/docs/
---


# Installing PostgreSQL on Arch Linux

1. **Update the package list**:

   sudo pacman -Syu

2. **Install PostgreSQL**:

   sudo pacman -S postgresql

3. **Initialize the database**:

   sudo -iu postgres initdb --locale $LANG -D /var/lib/postgres/data

4. **Start PostgreSQL**:

   sudo systemctl start postgresql

5. **Enable PostgreSQL on boot**:

   sudo systemctl enable postgresql

6. **Verify the installation**:

   psql --version
