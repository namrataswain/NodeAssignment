const Companies = [
  { id: 1, name: google },
  { id: 2, name: facebook },
];

exports.getAllCompanies = (req, res, next) => {
  res.render("company", {
    prods: Companies,
    pageTitle: "Company",
    path: "/getCompanies",
    hasProducts: companies.length > 0,
    activeShop: true,
    productCSS: true,
  });
};

exports.getEditComapny = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) {
      return res.redirect("/");
    }
    res.render("admin/edit-product", {
      pageTitle: "Edit Company",
      path: "/edit-comapny",
      editing: editMode,
      product: product,
    });
  });
};

exports.EditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect("/admin/products");
};

exports.postACompany = (req, res, next) => {
  companies.push({ id: req.body.id, name: req.body.name });
  res.redirect("/");
};

exports.DeleteCompany = (req, res, next) => {
  const companyId = req.body.id;
  Companies.deleteById(companyd);
  res.redirect("/getAllproducts");
};
