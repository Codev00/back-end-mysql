import { UserController } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.post("/login", UserController.getUser);
router.post("/register", UserController.createUser);
router.put("/edit/:id", UserController.editUser);
router.delete("/delete/:id", UserController.deleteUser);
