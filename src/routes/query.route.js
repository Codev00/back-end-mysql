import exporess from "express";
import { QueryController } from "../controllers/index.js";

const router = exporess.Router();

router.get("/staff/:id", QueryController.getStaff);
router.get("/bill/:id", QueryController.getBill);
router.get("/billDetail/:id", QueryController.getBillDetail);
router.get("/area/:id", QueryController.getArea);
router.get("/table/:id", QueryController.getTable);
router.get("/product/:id", QueryController.getProduct);
router.get("/store/:id", QueryController.getStore);

export default router;
