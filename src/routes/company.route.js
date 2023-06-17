import express from "express";
import { CompanyController } from "../controllers/index.js";

const router = express.Router();

router.post("/create", CompanyController.creareCompany);
router.get("/all", CompanyController.getAllCompany);

export default router;
