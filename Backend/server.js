import app from "./src/app.js"
import morgan from "morgan";
import "dotenv/config"

import { connectDB } from "./src/config/database.js";



connectDB()

app.listen(3000,()=>{
  console.log("server is connected to port 3000")
})
