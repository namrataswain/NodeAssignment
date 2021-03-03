const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(7000, () => {
  console.log("server started on port 7000");
});

//--------------format2----------
// const express = require("express");

// const app = express();

// //middleware
// app.use("/product", (req, res, next) => {
//   res.send("<h1>Product page</h1>");
// });

// app.use("/", (req, res, next) => {
//   res.send("<h1>Hello from express</h1>");
// });

// app.listen(7000);

//--------------format1-----------------
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.write(
//       '<html><body><h1>Hello Node JS App</h1><form action ="/post-message" method="POST"><input type="email" name="email" placeholder ="enter email"> <input type="text" name="message" placeholder ="enter your message"><button>SEND</button></form></body></html>'
//     );
//     res.end();
//   } else if (url === "/post-message" && method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       body.push(chunk);
//     });

//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       fs.writeFileSync("info.txt", parsedBody);
//     });
//     res.write("<html><h1>Your request submitted</h1></html>");
//     res.end();
//   }
// });

// server.listen(7000);
