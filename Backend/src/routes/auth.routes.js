import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { validatorRegisterUser } from "../validations/auth.validator.js";
import passport from "passport"


const router = Router()

router.post("/register",validatorRegisterUser ,register)

router.post("/login", login)

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }))

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
    // Successful authentication, redirect to your desired route
    res.redirect("http://localhost:5173/");
});

export default router;