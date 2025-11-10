# 🧠 Understanding Asynchronous Programming in JavaScript

JavaScript runs on a **single main thread**, which means it can only execute **one task at a time**.  
Yet, it can still handle **asynchronous operations** like

- network requests,
- file reads, and
- timers without blocking the rest of the code.

This README explains **how asynchronous programming works under the hood** — including the roles of the **event loop**, **callback queue**, and **background APIs**.

---

## ⚙️ 1. The Main Thread

When JavaScript starts running, all your synchronous code executes on a **single main thread**, line by line.

```js
console.log("Start");

setTimeout(() => console.log("Async Task"), 2000);

console.log("End");

output:
Start
End
Async Task

Even though the setTimeout comes before End, the callback runs later — because it’s handled asynchronously.
```

## 🌐 2. Offloading Tasks to Background APIs

When you **call an asynchronous function** like <ins><b>setTimeout</b></ins> ,<ins><b>fetch</b> </ins>, or <ins><b>fs.readFile </b> </ins>,
JavaScript hands it off to a background system provided by the runtime:

Web APIs in browsers

libuv thread pool in Node.js

These run outside the main thread.

Example:

setTimeout(() => console.log("Runs later"), 2000);

**_When setTimeout() is called, JavaScript offloads that task to a Web API (in browsers) or libuv thread pool (in Node.js)._**

While the timer counts down in the background, the main thread keeps executing the rest of the code.

## 🕓 3. The Callback Queue

When the background task completes (e.g., after 2 seconds),
the environment pushes the callback function into a callback queue (also called the task queue).

The callback isn’t executed immediately — it waits until the main thread is free.

## 🔁 4. The Event Loop

The event loop constantly checks:

“Is the main thread free? If yes, move the next callback from the queue and execute it.”

When the main thread becomes idle, the event loop takes the callback and runs it on the main thread.

This ensures JavaScript remains non-blocking, even though it’s single-threaded.
