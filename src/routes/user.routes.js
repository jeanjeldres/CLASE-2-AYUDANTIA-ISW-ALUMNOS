import { Router } from "express";
import { updateProfileController, deleteProfileController } from "../controllers/user.controller.js";
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = Router();

router.patch("/profile/private", authMiddleware, updateProfileController);

router.delete("/profile/private", authMiddleware, deleteProfileController);

export default router;