
console.log('Starting fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts')

console.log('After fetch call');

console.log(postsPromise);

console.log('After program has run');

postsPromise
  .then(data => data.json())
  .then(data => {
    data.posts.forEach((item) => {
      console.log(item.title);
    });
  })
  .catch((err) => {
    console.log(err);
  });


// $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
//   $("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
// });