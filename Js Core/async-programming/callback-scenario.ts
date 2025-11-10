// Scenario

/* 

 1. Register
 2. Send welcome email
 3. Login
 4. Get user data
 5. Display user data

*/
// synchronous way
function wait_for_3_sec() {
  const ms = 3000 + new Date().getTime();
  while (new Date().getTime() < ms) {}
}

function register() {
  wait_for_3_sec();
  console.log("Registration Successful...!");
}
function welcomeEmail() {
  wait_for_3_sec();
  const email = "himel012@gmail.com";
  console.log(`${email},welcome to Bangladesh..!`);
}
function login() {
  wait_for_3_sec();
  console.log("Successfully Logged in");
}
function getUserData(callback: Function) {
  wait_for_3_sec();
  const location = "Khulna";
  console.log("Preparing data");
  callback(location);
}
function displayUserData(location: string) {
  wait_for_3_sec();
  console.log(`Locatiion is: ${location}`);
}

function main() {
  register();
  welcomeEmail();
  login();
  getUserData(displayUserData);
}
// main();
// *** in synchronous way it is blocking the code and runs line by line. as a result it takes lot time & to solve this do it asynchronously

// asynchronous way

function register_02(callback) {
  setTimeout(() => {
    console.log("Registration Successful...!");
    callback();
  }, 2000);
}
function welcomeEmail_02() {
  const email = "himel012@gmail.com";
  console.log(`welcome Email: ${email}..!`);
}
function login_02(callback) {
  setTimeout(() => {
    console.log("Successfull Log in");
    callback();
  }, 3000);
}
function getUserData_02(callback: Function) {
  const location = "Khulna";
  console.log("Get user data");
  callback(location);
}
function displayUserData_02(location: string) {
  console.log(`Locatiion is: ${location}`);
}

function main_02() {
  register_02(() => {
    welcomeEmail_02();
    login_02(() => {
      getUserData_02(displayUserData_02);
    });
  });
}
main_02();

// While using callback(), it can break the order , tough it can be solve using callback() --> but it can lead to callback hell (lot of nested functions and while it becomes complex) ; so to solve this we need to use *** promises ***
