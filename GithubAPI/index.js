console.log('Start');
getUser(1, displayUser);
console.log('End');

function displayUser(user) {
  getRepos(user.gitHubUsername, displayRepos);
}

function displayRepos(repos) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from the database...');
      resolve({ id: id, gitHubUsername: 'kelvan' });
    }, 2000);
  });
}

function getRepos(username, callback) {
  setTimeout(() => {
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}
