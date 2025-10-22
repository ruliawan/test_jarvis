import express from 'express';
import { login, logout } from '../controller/authController.js';
import { verifyToken } from '../middleware/auth.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();
const limit = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message: {message: "Terlalu banyak percobaan login, silahkan login dalam 1 menit lagi!"}
});

router.post("/login", limit, login);
router.post("/logout", logout);
router.get("/dashboard", verifyToken, (req, res) => {
    return res.json({message: `Selamat Datang ${req.user.email}!`})
});

export default router;