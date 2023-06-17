import express from "express";
import { StaffController } from "../controllers/index.js";

const router = express.Router();

router.get("/:id", StaffController.getStaff);
router.post("/create", StaffController.createStaff);
router.put("/edit/:id", StaffController.editStaff);
router.delete("/delete/:id", StaffController.deleteStaff);

export default router;
