import express from "express";
import * as employeeController from "../controllers/employeeController";
const router = express.Router();

router.get("/show", employeeController.showSheet);
router.post("/create", employeeController.createSheet);
router.put("/update/", employeeController.updateSheet);
router.delete("/delete/", employeeController.deleteSheet);

export default router;
