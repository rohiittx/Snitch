import express from "express";
import morgan from "morgan";
import router from "./routes/auth.routes.js";
import cors from "cors";

const app = express()

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))


app.use("/api/auth", router)

export default app