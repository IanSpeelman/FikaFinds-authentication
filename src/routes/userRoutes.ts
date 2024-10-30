import { Router } from "express";
import { login, register, checkJWT } from "../controllers/userController";

const router = Router();

router.post('/login', login)
router.post('/register', register)
router.get('/check', checkJWT)

export default router
