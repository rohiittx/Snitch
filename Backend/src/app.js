import express from "express";
import morgan from "morgan";
import router from "./routes/auth.routes.js";
import cors from "cors";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { config } from "./config/config.js";


const app = express()

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))

app.use(passport.initialize())

passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5173/auth/google/callback"
},(accessToken , refeshToken, profile, done)=>{
    return done(null, profile)
}))


app.use("/api/auth", router)

export default app