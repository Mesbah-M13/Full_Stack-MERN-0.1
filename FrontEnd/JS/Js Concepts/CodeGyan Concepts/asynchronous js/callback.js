function checkInventory(callback) {
  setTimeout(() => {
    console.log("Checking inventory...");
    callback();
  }, 2000);
}

function createOrder(callback) {
  setTimeout(() => {
    console.log("Create order🍵");
  }, 3000);
  callback();
}

function chargePayment(callback) {
  setTimeout(() => {
    console.log("Calculating payment amount for the order 💲");
  }, 1000);
  callback();
}

function orderInvoice(callback) {
  setTimeout(() => {
    console.log("Preparing invoice 🧾");
  }, 1000);
  callback();
}

function main() {
  checkInventory(() => {
    createOrder(() => {
      chargePayment(() => {
        orderInvoice(() => {
          console.log("All processes are done...");
        });
      });
    });
  });
  // createOrder();
  // chargePayment();
  // orderInvoice();
  console.log("Process in going on");
}

main();
