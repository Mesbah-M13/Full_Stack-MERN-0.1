import chalk from "chalk";

function checkInventory2(callback: () => void): void {
  setTimeout(() => {
    console.log("Checking the inventory.");
    callback();
  }, 2000);
}
function createOrder2(callback: () => void): void {
  setTimeout(() => {
    console.log("Creating an order.");
    const error = new Error("Order creation failed...");

    callback(error);
  }, 1000);
}
function chargePayment2(callback: () => void): void {
  setTimeout(() => {
    console.log("Charging the payment.");
    callback();
  }, 2000);
}
function sendInvoice2(callback: () => void): void {
  setTimeout(() => {
    console.log("Sending the invoice.");
    callback();
  }, 1000);
}

function mainFunc() {
  checkInventory2(() => {
    createOrder2((error) => {
      if (error) {
        console.log("Error Found");
        return;
      }

      chargePayment2(() => {
        sendInvoice2(() => console.log("All Done...")); // such way it creats callback hell
        // to avoid callback hell; use
      });
    });
  });
}

// mainFunc();

// Passing other necessary data

function checkInventory3(callback: () => void): void {
  setTimeout(() => {
    console.log("Checking the inventory.");
    callback();
  }, 3000);
}
function createOrder3(callback: () => void): void {
  setTimeout(() => {
    console.log("Creating an order.");
    const error = new Error("Order creation failed...");

    callback(error);
  }, 1000);
}
function chargePayment3(callback: () => void): void {
  setTimeout(() => {
    console.log("Charging the payment.");
    let error = null;
    let chargedAmount = 399; // ⚡Remember, while using callback ; the 1st parameter will be an error , then use other logic
    callback(error, chargedAmount);
  }, 3000);
}
function sendInvoice3(callback: () => void): void {
  setTimeout(() => {
    console.log("Sending the invoice.");
    callback();
  }, 1000);
}

function mainFunction() {
  checkInventory3(() => {
    createOrder3((error) => {
      if (error) {
        console.log("☠️   Error Found  ☠️");
      }

      chargePayment3((error, chargedAmount) => {
        if (error) {
          console.log("Operation failed while charging for the products");
          return;
        } else
          console.log(
            chalk.greenBright(`Product's charged amount: ${chargedAmount} BDT`)
          );
        sendInvoice3(() => console.log("All Done...")); // such way it creats callback hell
        // to avoid callback hell; use
      });
    });
  });
}

mainFunction();

/* 
🔖 Some Important Takeaways:

   1. always check error in callbacks
   2. if there is no error ; use error = null
   3. by creating so many callbacks, it makes a big mess; which is known as callback hell
***4. to avoid callback hell, use promises --> it makes the code more readable than ever
*/
