//ternary operators inside string interpolation


const page = 'Home';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout' }`);
  // => class=master-layout

const about = 'about';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout' }`);
  // => class=secondary-layout