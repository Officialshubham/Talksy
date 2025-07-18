import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js"
const router = express.Router()

router.post('/signup', signup)

router.post('/login', login)

router.post('/logout', logout)

// protectRoute checks if we have jwt token in cookie (Authenticated)
router.put('/update-profile', protectRoute, updateProfile)

export default router;