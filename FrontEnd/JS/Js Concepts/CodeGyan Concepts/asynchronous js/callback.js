function checkInventory(callback) {
  setTimeout(() => {
    console.log("Checking inventory...");
    callback();
  }, 2000);
}

function createOrder() {
  setTimeout(() => {
    console.log("Create order🍵");
  }, 3000);
}

function chargePayment() {
  setTimeout(() => {
    console.log("Calculating payment amount for the order 💲");
  }, 1000);
}

function orderInvoice() {
  setTimeout(() => {
    console.log("Preparing invoice 🧾");
  }, 1000);
}

function main() {
  checkInventory(() => {
    console.log("Callback is called");
  });
  // createOrder();
  // chargePayment();
  // orderInvoice();
  console.log("Process in going on");
}

main();
