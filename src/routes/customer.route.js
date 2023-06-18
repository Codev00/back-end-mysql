import { CustomerController } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.get("/:id", CustomerController.getCustomer);
router.post("/create", CustomerController.createCustomer);
router.put("/update/:id", CustomerController.updateCustomer);
router.delete("/delete/:id", CustomerController.deleteCustomer);

export default router;
