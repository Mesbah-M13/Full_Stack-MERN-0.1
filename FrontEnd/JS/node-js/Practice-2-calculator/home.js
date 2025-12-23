const handleHomeRoute = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head> <title>Document</title></head>");
    res.write("<body></body>");
    res.write("<h1>Welcome Home</h1>");
    res.write("<a href='/calculator'>Visit calculator</a>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head> <title>Calculator Page</title></head>");
    res.write("<body></body>");
    res.write("<h1>Calculate</h1>");
    res.write("<form action='submit-result' method='POST'>");
    res.write("<label for='input1'>First Input :  </label> ");
    res.write(
      "<input type='number' name='1st_input' id='1st_input' value='inpu1' placeholder='Type here (1st)'> <br> <br> "
    );
    res.write("<label for='input2'>Second Input :  </label> ");
    res.write(
      "<input type='number' name='2nd_input' id='1st_input' value='inpu2' placeholder='Type here (2nd)'> <br><br> "
    );

    res.write("<button type='submit'> Calculate Sum </button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-result" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
    });
  }
};

module.exports = handleHomeRoute;
