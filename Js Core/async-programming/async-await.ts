import chalk from "chalk";

// async function fetchData() {
//   const result1 = await api1.fetch("/data");
//   const result2 = await api2.fetch("/data");
//   const result3 = await api3.fetch("/data");

//   return [result1, result2, result3];
// } // these are not parallelized

// async function fetchData_1(){
//   return Promise.all([
//     api1.fetch("/data")
//     api2.fetch("/data")
//     api3.fetch("/data")
//   ])
// }

function register_05(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log(chalk.underline.bgBlue("Registration Successful...!"));
      resolve();
    }, 2000);
  });
}
function welcomeEmail_05() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const email = "himel012@gmail.com";
      console.log(`welcome Email: ${email}..!`);
      resolve();
    }, 3000);
  });
}
function login_05() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Successfull Log in");
      resolve();
    }, 1000);
  });
}
function getUserData_05() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Get user data");
      resolve();
    }, 1000);
  });
}
function displayUserData_05() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Display User Data...");
      resolve();
    }, 1000);
  });
}

// function main_05() {
//   register_05()
//     .then(welcomeEmail_05)
//     .then(login_05)
//     .then(getUserData_05)
//     .then(displayUserData_05)
//     .catch((err) => console.log("Error: ", err));
// }

async function main_05() {
  await register_05();
  await welcomeEmail_05();
  await login_05();
  await getUserData_05();
  await displayUserData_05();
}
main_05();
