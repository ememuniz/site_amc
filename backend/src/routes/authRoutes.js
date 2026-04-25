import express  from "express";
import { register, login, getMe } from "../controllers/authController.js";
import { verifyToken } from "../middlewares/authmiddleware.js";

const router = express.Router();

//Rotas públicas (não precisam de token)
router.post('/register', register);
router.post('/login', login);

//Rotas protegidas (o middleware entra antes do controller)
router.get('/me', verifyToken, getMe);
export default router;