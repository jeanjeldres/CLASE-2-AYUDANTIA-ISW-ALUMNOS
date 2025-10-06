
import { Router } from "express";
import { updateProfileController, deleteProfileController } from "../controllers/user.controller.js";
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = Router();

router.patch("/update", authMiddleware, updateProfileController);

router.delete("/delete", authMiddleware, deleteProfileController);

export default router;