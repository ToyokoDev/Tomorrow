import { taskGetAll } from "../controllers/task.controller.js";
import { Router } from "express";
const router: Router = Router();
router.get("/", taskGetAll);
export default router;
