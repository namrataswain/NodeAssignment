const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const csrf = require("csurf");
const flash = require("connect-flash");

const app = express();
const csrfProtection = csrf();

const MONGODB_URI =
  "mongodb+srv://maximilian:9u4biljMQc4jjqbe@cluster0-ntrwp.mongodb.net/shop";

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});
const csrfProtection = csrf();

app.set("view engine", "pug");
app.set("views", "views");

//const adminRoutes = require("./routes/admin");

const aboutRoutes = require("./routes/about-us");

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(adminRoutes);

app.use(aboutRoutes);

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

// sequelize
//   .sync()
//   .then((result) => {
//     //console.log(result);
//     app.listen(7000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
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
