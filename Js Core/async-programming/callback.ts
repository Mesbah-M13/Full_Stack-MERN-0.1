// A callback is a function that is passed as an argument to another function and is executed after (or during) the execution of that function.

// 2 types of callback
// 1. synchronous & 2. asynchronous

// synchronous example
function greet(name: string, callback: (msg: string) => void) {
  console.log("This is synchronous callback");
  const msg = `Hello ${name}`;
  callback(msg);
}
function myCallbackFn(msg: string) {
  console.log(msg);
}
// greet("Himel", myCallbackFn);

// asynchronous example
function asynGreet(name: string, callback: (msg: string) => void) {
  const msg = `Hello, ${name}`;

  setTimeout(() => console.log(callback(msg))), 1000;
}
function myAsyncCallbackFn(msg: string) {
  console.log(msg);
}
// greet("M. Himel", myAsyncCallbackFn);

// coder's gyan part***
function checkInventory2(callback) {
  setTimeout(() => {
    console.log("Checking the inventory.");
    callback();
  }, 2000);
}
function createOrder2(callback) {
  setTimeout(() => {
    console.log("Creating an order.");
    callback();
  }, 1000);
}
function chargePayment2(callback) {
  setTimeout(() => {
    console.log("Charging the payment.");
    callback();
  }, 2000);
}
function sendInvoice2(callback) {
  setTimeout(() => {
    console.log("Sending the invoice.");
    callback();
  }, 1000);
}

function mainFunc() {
  checkInventory2(() => {
    createOrder2(() => {
      chargePayment2(() => {
        sendInvoice2(() => console.log("All Done...")); // such way it creats callback hell
        // to avoid callback hell; use
      });
    });
  });
  // createOrder2();
  // chargePayment2();
  // sendInvoice2();
  console.log("Other requests are processing...");
}
mainFunc();
