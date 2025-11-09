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
greet("M. Himel", myAsyncCallbackFn);
