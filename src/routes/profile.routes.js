import { Router } from "express";
import { updateProfileController, deleteProfileController } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  getPublicProfile,
  getPrivateProfile,
} from "../controllers/profile.controller.js";

const router = Router();

router.get("/public", getPublicProfile);

router.get("/private", authMiddleware, getPrivateProfile);

router.patch("/profile/private", authMiddleware, updateProfileController);

router.delete("/profile/private", authMiddleware, deleteProfileController);

export default router;
