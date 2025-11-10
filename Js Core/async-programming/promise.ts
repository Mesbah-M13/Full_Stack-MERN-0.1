// when we don't know how much time an operation might take in advance ( might be 2s or 5s ), use the promise and when the task finishes such as: data comes back from database etc notify back

// callback hell example
/*
function register_02(callback: Function) {
  setTimeout(() => {
    console.log("Registration Successful...!");
    callback();
  }, 2000);
}
function welcomeEmail_02(callback: Function) {
  setTimeout(() => {
    const email = "himel012@gmail.com";
    console.log(`welcome Email: ${email}..!`);
    callback();
  }, 3000);
}
function login_02(callback: Function) {
  setTimeout(() => {
    console.log("Successfull Log in");
    callback();
  }, 1000);
}
function getUserData_02(callback: Function) {
  setTimeout(() => {
    console.log("Get user data");
    callback();
  }, 1000);
}
function displayUserData_02() {
  setTimeout(() => {
    console.log("Display User Data...");
  }, 1000);
}

function main_02() {
  register_02(() => {
    welcomeEmail_02(() => {
      login_02(() => {
        getUserData_02(() => {
          displayUserData_02();
        });
      });
    });
  });
  console.log("App structure complete");
}
// main_02();
*/
// older example
function register_03(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Registration Successful...!");
      resolve();
    }, 2000);
  });
}
function welcomeEmail_03() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const email = "himel012@gmail.com";
      console.log(`welcome Email: ${email}..!`);
      resolve();
    }, 3000);
  });
}
function login_03() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Successfull Log in");
      resolve();
    }, 1000);
  });
}
function getUserData_03() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Get user data");
      resolve();
    }, 1000);
  });
}
function displayUserData_03() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Display User Data...");
      resolve();
    }, 1000);
  });
}

function main_03() {
  register_03()
    .then(welcomeEmail_03)
    .then(login_03)
    .then(getUserData_03)
    .then(displayUserData_03);
}
// main_03();

// error handling in promises
function register_04(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Registration Successful...!");
      resolve();
    }, 2000);
  });
}
function welcomeEmail_04() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const email = "himel012@gmail.com";
      console.log(`welcome Email: ${email}..!`);
      reject("Error in welcome email!");
    }, 3000);
  });
}
function login_04() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Successfull Log in");
      resolve();
    }, 1000);
  });
}
function getUserData_04() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Get user data");
      resolve();
    }, 1000);
  });
}
function displayUserData_04() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Display User Data...");
      resolve();
    }, 1000);
  });
}

function main_04() {
  register_04()
    .then(welcomeEmail_04)
    .then(login_04)
    .then(getUserData_04)
    .then(displayUserData_04)
    .catch((err) => console.log("Error: ", err));
}
main_04();
