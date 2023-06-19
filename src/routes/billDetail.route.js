import express from "express";
import { BillDetailController } from "../controllers/index.js";

const router = express.Router();

router.get("/:id", BillDetailController.getBillDetail);
router.post("/create", BillDetailController.createBillDetail);
router.put("/edit/:id", BillDetailController.editBillDetail);
router.delete("/delete/:id", BillDetailController.deleteBillDetail);

export default router;
