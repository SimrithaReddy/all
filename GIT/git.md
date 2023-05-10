# Problem Statement
-TRACKING of CHANGES
-COLLABORATION
# SOLUTION
--VERSION/SOURCE CONTROL
# GIT
-GIT is a command line tool offers version control
# Application of Source Control
-Source Tree
-GITHUB Desktop
-Tortoise Git
-GitKraken
# GIT TOPICS
-Install VSCode
-Installing Git
-Configuring Git
-Creating a Repository
-Checkout a Repository
-Status
-Adding Files to a Repository
-Committing Files to a Repository
-Adding a Remote Repository
-Pushing to a Repository
-Pull from a Repository
-Creating a Branch
-Switching Branches
-Deleting Branches
-Merging
-Stash
-Git Log
# Process
- Download GIT
- Create Github account
- SIGN IN
- CREATE REPO
- CREATE Empty folder in     LOCAL
- git init--> CREATE Repo using git bash cmd (No need if you created through github UI)
- GIT Account setup using git config --global user.email "you@example.com" and git config --global user.name "Your Name" and git config --global user.password "your password"
# DEVELOPER STEPS
- GIT clone using git clone username@host:/path/to/repository.git
- GIT command to know repo details git remote show origin
- GIT Check out using git checkout -b <BRANCHNAME> to create new branch
- GIT switch if branch already exist using git checkout <BRANCHNAME> to switch.
- GIT STATUS to check uncommited changes and Branch Name using  git status
- GIT commmand to check all available branch and shows current checked out branch using git branch
- GIT commmand to check all available branch and shows current checked out branch and all remote origin branches using git branch -a
- GIT commmand to update the branches/commits from remote to local using git fetch --all
- GIT command to check the difference between current and previous version using git diff
- GIT Staging using git add <FILENAME/FOLDERNAME> to stage the file
- GIT Unstaging using git reset HEAD <filepath/folderpath>
- Git Commit using  git commit -m <MESSAGE>
- GIT command to see all commit history using git reflog
- GIT command to Add a remote REPO using  git remote add origin username@host:/path/to/repository.git
- GIT PULL from REMOTE REPO git pull origin master
- git branch --set-upstream-to=origin/<MAIN BRANCH NAME> feature/header
- GIT PUSH to REMOTE REPO using git push origin <LOCAL BRANCH NAME>
-GIT create pull request like username@host:/path/to/repository/pull/<PULL REQUEST NUMBER>
- GIVE Access to collaborator username@host:/path/to/repository/settings and click on collaborator then add name.
- ONCE PR APPROVED run -git pull origin main to pull latest changes from ORIGN branch
- GIT command to save your changes safely in local without committing using stash git stash git stash list git stash apply stash@{stash_index}