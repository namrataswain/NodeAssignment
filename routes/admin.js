const path = require("path");

const express = require("express");
const companiesController = require("../controllers/companies");
const router = express.Router();

router.get("/get-companies", companiesController.getAllCompanies);

router.post("/add-product", companiesController.postACompany);

router.put("/update-company/companyId", companiesController.EditProduct);

router.delete(
  "/delete-company/companyId",
  companiesController.postDeleteCompany
);

module.exports = router;
