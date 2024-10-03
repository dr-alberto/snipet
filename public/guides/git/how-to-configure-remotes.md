---
header: Configuring Remotes in Git
desc: Git is a free, open-source version control system that tracks changes in source code, enabling collaboration and efficient management of projects.
lastUpdated: October 3, 2024
urls: 
   - title: Git Documentation
     url: https://git-scm.com/doc
---

# Configuring Remotes

Remotes are versions of your project that are hosted on the internet or another network. You can view and configure remotes as follows:

1. **View Existing Remotes**

To view the remotes associated with your local repository, use:

```bash
git remote -v
```

This command will list all configured remotes along with their URLs.

2. **Add a New Remote**

To add a new remote, use the following command:

```bash
git remote add <name> <remote-url>
```

Replace `<name>` with a short name for the remote (e.g., `origin`, `upstream`) and `<remote-url>` with the actual URL of the remote repository. For example:

```bash
git remote add upstream https://github.com/otheruser/repository.git
```

3. **Remove a Remote**

To remove a remote, use the command:

```bash
git remote remove <name>
```

Replace `<name>` with the name of the remote you want to remove. For example:

```bash
git remote remove upstream
```

4. **Change a Remote’s URL**

To change the URL of an existing remote, use:

```bash
git remote set-url <name> <new-url>
```

Replace `<name>` with the remote's name and `<new-url>` with the new URL. For example:

```bash
git remote set-url origin https://github.com/user/new-repository.git
```