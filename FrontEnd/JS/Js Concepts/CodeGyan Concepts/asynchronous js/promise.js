function checkInventory() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Checking inventory...");
      resolve();
    }, 2000);
  });
  return promise;
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
  checkInventory().then(() => console.log("Inventory checked done"));
  console.log("Process in going on");
}

main();
