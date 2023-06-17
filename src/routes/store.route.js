import { StoreController } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.post("/create", StoreController.createStore);
router.put("/edit/:id", StoreController.EditStore);
router.delete("/delete/:id", StoreController.DeleteStore);
router.get("/:id", StoreController.getStore);

export default router;
