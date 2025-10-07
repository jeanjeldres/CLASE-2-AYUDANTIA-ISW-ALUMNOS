import { Router } from "express";
import { updateProfileController, deleteProfileController } from "../controllers/profile.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  getPublicProfile,
  getPrivateProfile,
} from "../controllers/profile.controller.js";

const router = Router();

router.get("/public", getPublicProfile);

router.get("/private", authMiddleware, getPrivateProfile);

router.patch("/update", authMiddleware, updateProfileController);

router.delete("/delete", authMiddleware, deleteProfileController);

export default router;
