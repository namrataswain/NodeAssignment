const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(
      '<html><body><h1>Hello Node JS App</h1><form action ="/post-message" method="POST"><input type="email" name="email" placeholder ="enter email"> <input type="text" name="message" placeholder ="enter your message"><button>SEND</button></form></body></html>'
    );
    res.end();
  } else if (url === "/post-message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      fs.writeFileSync("info.txt", parsedBody);
    });
    res.write("<html><h1>Your request submitted</h1></html>");
    res.end();
  }
});

server.listen(7000);
