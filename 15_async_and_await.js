// Callback hell

// user logs in 
//  verify credentials
//    redirecg to dashboard
//      update the db account
//        api calls to bring user data...
//          .......
// Promises allow a little more control, but even they can get too messy

const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User logged in....');
    }, 2000);
  });
}

const updateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivities() {
  const returnedLogin = await login();
  console.log(returnedLogin);
    // => User logged in...

  const returnedUpdateAccount = await updateAccount();
  console.log(returnedUpdateAccount);
    // => Updating last login
}