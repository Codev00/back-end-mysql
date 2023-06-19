import { InvoiceDetailController } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.get("/:id", InvoiceDetailController.getInvoiceDetail);
router.post("/create", InvoiceDetailController.createInvoiceDetail);
router.put("/edit/:id", InvoiceDetailController.editInvoiceDetail);
router.delete("/delete/:id", InvoiceDetailController.deleteInvoiceDetail);

export default router;
