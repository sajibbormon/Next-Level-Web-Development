import { Router } from "express";
import { profileController } from "./profile.controller";


const router = Router()

router.get("/", profileController.getAllProfiles);
router.get("/:id", profileController.getSingleProfile);
router.post("/", profileController.createProfile);
router.put("/:id", profileController.updateProfile);
router.delete("/:id", profileController.deleteProfile);

export const profileRouter = router;