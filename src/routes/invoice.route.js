import { InvoiceController } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.get("/:id", InvoiceController.getInvoice);
router.post("/create", InvoiceController.createInvoice);
router.put("/edit/:id", InvoiceController.editInvoice);
router.delete("/delete/:id", InvoiceController.deleteInvoice);

export default router;
