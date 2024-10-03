---
header: Pushing changes in Git
desc: Git is a free, open-source version control system that tracks changes in source code, enabling collaboration and efficient management of projects.
lastUpdated: October 3, 2024
urls: 
   - title: Git Documentation
     url: https://git-scm.com/doc
---


## 1. Creating a Branch

Creating a branch is important for isolating your work. Follow these steps to create a branch:

1. **Check out the main branch** (usually `main` or `master`):
   ```bash
   git checkout main
   ```

2. **Pull the latest changes** to ensure your branch is up to date:
   ```bash
   git pull origin main
   ```

3. **Create a new branch**:
   ```bash
   git checkout -b <branch-name>
   ```

   Replace `<branch-name>` with a meaningful name describing your work, such as `feature-new-button` or `bugfix-login-error`.

---

## 2. Making Changes and Committing

1. **Make your changes** to the files in your project.

2. **Stage the changes** you want to commit:
   ```bash
   git add <file1> <file2>
   ```

   Or stage all changes:
   ```bash
   git add .
   ```

3. **Commit the changes** with a descriptive message:
   ```bash
   git commit -m "Add new feature or fix bug"
   ```

---

## 3. Pushing Changes to the Remote Repository

After committing your changes, you need to push your branch to the remote repository:

1. **Push your branch** to the remote repository:
   ```bash
   git push origin <branch-name>
   ```

   Replace `<branch-name>` with the name of the branch you created earlier.