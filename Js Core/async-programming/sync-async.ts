// order processing

// synchronous way
function checkInventory() {
  console.log("Checking the inventory.");
}
function createOrder() {
  console.log("Creating an order.");
}
function chargePayment() {
  console.log("Charging the payment.");
}
function sendInvoice() {
  console.log("Sending the invoice.");
}

function main() {
  checkInventory();
  createOrder();
  chargePayment();
  sendInvoice();
}
// main();

/*

Main Thread ----> [console.log("Start")] ----> [setTimeout(...)] ----> [console.log("End")]
                                  |
                                  v
                        Background Timer (2s)
                                  |
                                  v
                         Callback Queue ---> Event Loop ---> Back to Main Thread


                         Asynchronous programming in JavaScript works by offloading time-consuming tasks to background APIs (outside the main thread).
Once those tasks finish, the event loop brings their callbacks back to the main thread to execute —
without blocking other code in the meantime.
                         */

// async way

function checkInventory1() {
  setTimeout(() => {
    console.log("Checking the inventory.");
  }, 2000);
}
function createOrder1() {
  setTimeout(() => {
    console.log("Creating an order.");
  }, 1000);
}
function chargePayment1() {
  setTimeout(() => {
    console.log("Charging the payment.");
  }, 2000);
}
function sendInvoice1() {
  setTimeout(() => {
    console.log("Sending the invoice.");
  }, 1000);
}

function mainFn() {
  checkInventory1();
  createOrder1();
  chargePayment1();
  sendInvoice1();
  console.log("Other requests are processing...");
}
mainFn();

// to arrange all the things in order we need to use callback

/* 
🔖 Some Important Takeaways:
  1. synchronous js
  2. why to do asynchronous js
  3. to solve the issues of asyn js ; use callback()

*/
