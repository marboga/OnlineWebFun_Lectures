#Web Fundamentals - Week 1

####Key Assignment
- Free BSD done by Thursday (this will be code reviewed via upload from platform)
- PPC by Friday

####Administrative Bits
- Link to powerpoint [https://docs.google.com/presentation/d/19PNX2gYcL4J8jVeogSQXTeNzDwwOGYLq35xTscknEOo/edit?usp=sharing]
  - About us
  - First 1:1
  - Overview
  - Future Meetings
  - Expectations & Culture
    - Attitude & Dedication
    - Expected Hours
  - 20 min rule
  - Our platform
  - Communication (slack)
- Anyone still not invited to the Coding Dojo Online Slack team?
- Anyone still not able to access the Learning Platform? [http://learn.codingdojo.com]
- Anyone still not in the Slack web-fundamentals channel?

##Git/GitHub

- Before we begin to code we want to be able to keep track of what we are doing, be able to showcase it, share it and collaborate.

<table>
  <thead>
    <th>Git</th>
    <th>GitHub</th>
  </thead>
  <tbody>
    <tr>
      <td>Local</td>
      <td>External</td>
    </tr>
    <tr>
  </tbody>
</table>

####Git vs. GitHub
- What Git does for you locally is monitor projects (directories)
- We can do this by creating repositories or repos

  1. Let's create a directory on our Desktop: `mkdir YourName`
  2. Now let's navigate into our new directory `cd YourName`
  3. Let's initialize our repo to <b>monitor</b> our changes: `git init` (this could have been done as step 3 as well)
  4. Now let's put some code into our new directory. `touch AboutMe.md` or `type NUL > AboutMe.md`. We'll put some information into the readme file we just created with Atom.
  5. Now let's see what is going on with the file we just created. Remember we are now tracking our progress so we can do `git status` to see what has happened with our files.
  6. Next let's take the added files and make them 'stick' with an `add` and `commit` command:
  7. `git add .`  The period says "ADD <b><i>ALL</i></b> FILES IN THE CURRENT DIRECTORY!" (You can be selective and only add specific files you want).  Let's `git status` again to see what happened. Now our files are staged
  8. `git commit -m "added some style"` This command will take the staged files and commit them or make them last. One last `git status` to see what has changed with our files.

- This is the basic Git cycle for versioning locally (on your computer or cloud)

- *Scenario*: Our code needs some work, let's get it out there for all to see.  Enter GitHub.
  - GitHub is where we can post our code externally so others can copy it, contribute, watch it and collaborate with us.
  - We need to set up a link between our local (git) repository and GitHub.
  - By creating this link, we are creating a `remote` section to our `master` locally
  - Durring your time with Coding Dojo, we will be creating a new repository as part of an Organization. Together we will 
    - Set up a New Repository in our organization
    - link our New Repository `remote` to our local `master`
    - Push all of our infromation from the `master` into our `remote` on GitHub

  ###New Repository Instructions (not part of an organization)
  1. Go to GitHub.com and click the big '+' and choose New Repository
  2. Name your repo appropriately
  3. GitHub is nice and gives you options for creating a remote
  4. Since we already have a repo, we're going to only need to set up a remote and then push our code locally to the repo we just created on GitHub
  5. In our own terminal from the first level of our repo directory `myProject> git remote add origin https://github.com/marboga/someRepoName.git` (what this line does is establish a remote from our LOCAL machine to the external GitHub repo.  git remote add is the command to start a new remote.  origin is the name we're giving it, which can be customized)
  6. Now let's push our local project 'up' to GitHub. `git push origin master`
  - Now what exactly gets pushed?  
    - Our latest local commits.  If you have uncommitted changes in your files, they won't get pushed up to GitHub!

####Ways To Collaborate
- Okay, our code is out there, let's get others to help us improve it. We have a few ways. Forking Vs Cloning

<table>
  <thead>
    <th>COLLABORATOR'S CONCERNS</th>
    <th>Fork</th>
    <th>Clone</th>
  </thead>
  <tbody>
    <tr>
      <td><b>WHAT</b></td>
      <td>Makes a copy of the repo at GitHub</td>
      <td>Makes a copy of the repo on your local machine</td>
    </tr>
    <tr>
      <td><b>HOW TO GET LOCAL ACCESS</b></td>
      <td>That copied repo ^above^ needs to be 'cloned' to local</td>
      <td>Already on local</td>
    </tr>
    <tr>
      <td><b>PUSH</b></td>
      <td>Any 'push' gets sent to forked version of repo</td>
      <td>Any 'push' might get rejected because it's trying to push to the original owner's repo directly and we might not have collaborative rights</td>
    </tr>
    <tr>
      <td><b>TO INCORPORATE CHANGES</b></td>
      <td>Push changes to forked version, and <b>create a pull request</b></td>
      <td>Any changes made/committed locally can be pushed only while being a collaborator</td>
    </tr>
  </tbody>
</table>

####Discussion: What to look out for...
- .gitignore file (secretkey.py, *.DS_STORE, /venv)
- merge conflicts
- PULL A LOT
- "There's a command for that"
