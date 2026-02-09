// let url = require("url");
// let adr = "http://localhost:8080/default.htm?year=2017&month=february";
// let q = url.parse(adr, true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// let qdata = q.query;
// console.log(qdata.month);

const myURL = new URL("https://example.com?name=John&age=25");

console.log(myURL.searchParams.get("name")); // John
console.log(myURL.searchParams.get("age")); // 25

myURL.searchParams.append("city", "Dhaka");
console.log(myURL.toString());
