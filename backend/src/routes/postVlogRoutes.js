import express from "express";
import { verifyToken } from "../middlewares/authmiddleware.js";
import { createPost } from "../controllers/postController.js";

const router = express.Router();

router.post('/register', verifyToken, createPost);

export default router;