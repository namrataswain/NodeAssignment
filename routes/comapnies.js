const path = require("path");

const express = require("express");

const companyController = require("../controllers/companies");

const router = express.Router();

router.get("/add-company", companyController.getAddCompany);

router.get("/getCompanies", companyController.getCompany);

router.post("/add-company", companyController.postAddCompany);

router.get("/update-company/:companyId", companyController.getEditCompany);

router.post("/update-company", companyController.postEditCompany);

router.post("/remove-company", companyController.postDeleteCompany);

module.exports = router;
