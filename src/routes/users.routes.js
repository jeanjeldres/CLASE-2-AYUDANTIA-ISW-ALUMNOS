import { Router } from "express";
import { updateProfileController, deleteProfileController } from "../controllers/user.controller.js";
import { authenticateToken } from "../middlewares/validateJWT.js";

const router = Router();

router.patch("/profile/private", authenticateToken, updateProfileController);

router.delete("/profile/private", authenticateToken, deleteProfileController);

export default router;