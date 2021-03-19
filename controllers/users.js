const User = require("../models/user");

exports.postUser = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
  })
    .then((result) => {
      // console.log(result);
      console.log("Created Product");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUsers = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("admin/products", {
      prods: users,
      pageTitle: "Users",
      path: "/get-users",
    });
  });
};

exports.postDeleteUser = (req, res, next) => {
  const id = req.body.UserId;
  User.deleteById(id);
  res.redirect("/admin/products");
};

exports.getEditUser = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const id = req.params.id;
  User.findById(id, (user) => {
    if (!user) {
      return res.redirect("/");
    }
    res.render("/update-user", {
      pageTitle: "Edit User",
      path: "/update-user",
      editing: editMode,
      user: user,
    });
  });
};
