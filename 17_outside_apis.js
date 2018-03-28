
// https://api.dailysmarty.com/posts
// https://api.github.com/users/jordanhudgens/repos

async function queryApis() {
  const postsPromise = fetch('https://api.dailysmarty.com/posts');
  const posts = await postsPromise.then(res => res.json());
  console.log(posts);
    // => returns an array of posts from dailysmarty

  const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
  const repos = await reposPromise.then(res => res.json());
  console.log(repos);
    // => returns an array of repos from github
}

queryApis();