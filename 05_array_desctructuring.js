
const apiList = [
  'https://api.dailysmarty.com/posts',
  'https://api.github.com/users/jordanhudgens/repos',
  'https://api.github.com/users/jordanhudgens'
]

const posts = apiList[0];
console.log(posts);
  // => 'https://api.dailysmarty.com/posts'

const[posts, repos, profile] = apiList;
console.log(posts);
console.log(repos);
console.log(profile);
  // => 'https://api.dailysmarty.com/posts',
  //    'https://api.github.com/users/jordanhudgens/repos',
  //    'https://api.github.com/users/jordanhudgens'
