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
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Create order🍵");
      resolve();
    }, 3000);
  });
  return promise;
}

function chargePayment() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Calculating payment amount for the order 💲");
      resolve();
    }, 1000);
  });
  return promise;
}

function orderInvoice() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Preparing invoice 🧾");
      reject(new Error());
    }, 1000);
  });
  return promise;
}

function main() {
  checkInventory()
    .then(createOrder)
    .then(chargePayment)
    .then(orderInvoice)
    .then(() => {
      console.log("Process is done");
    })
    .catch((err) => {
      console.log("Issue detected", err);
    });

  console.log("Process in going on");
}

main();
