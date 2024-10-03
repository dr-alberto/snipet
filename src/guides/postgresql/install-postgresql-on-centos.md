---
header: Installing PostgreSQL on CentOS
desc: PostgreSQL is a powerful, open-source relational database system known for its extensibility, standards compliance, and support for advanced data types and complex queries.
lastUpdated: September 28, 2024
urls:
  - title: PostgreSQL Docs
    url: https://www.postgresql.org/docs/
---

# Installing PostgreSQL on CentOS

1. **Enable the PostgreSQL repository**:

   sudo yum install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-$(rpm -E %rhel)-x86_64/pgdg-redhat-repo-latest.noarch.rpm

2. **Install PostgreSQL**:

   sudo yum install postgresql13 postgresql13-server

3. **Initialize the database**:

   sudo /usr/pgsql-13/bin/postgresql-13-setup initdb

4. **Start PostgreSQL**:

   sudo systemctl start postgresql-13

5. **Enable PostgreSQL on boot**:

   sudo systemctl enable postgresql-13

6. **Verify the installation**:

   psql --version
