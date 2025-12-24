function checkInventory(callback) {
  setTimeout(() => {
    console.log("Checking inventory...");
    callback();
  }, 2000);
}

function createOrder(callback) {
  setTimeout(() => {
    console.log("Create order🍵");
    callback();
  }, 3000);
}

function chargePayment(callback) {
  setTimeout(() => {
    console.log("Calculating payment amount for the order 💲");
    callback();
  }, 1000);
}

function orderInvoice(callback) {
  setTimeout(() => {
    console.log("Preparing invoice 🧾");
    callback();
  }, 1000);
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
