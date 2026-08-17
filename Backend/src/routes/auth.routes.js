import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { validatorRegisterUser } from "../validations/auth.validator.js";

const router = Router()

router.post("/register",validatorRegisterUser ,register)

router.post("/login", login)

export default router;