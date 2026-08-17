
import "dotenv/config"

if(!process.env.MONGODB_URI){
    throw new Error("MONGODB_URI does not define in your environmental variable")
}

export const config = {
    MONGODB_URI : process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET
}

