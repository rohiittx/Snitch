
import "dotenv/config"

if(!process.env.MONGODB_URI){
    throw new Error("MONGODB_URI does not define in your environmental variable")
}

if(!process.env.JWT_SECRET){
    throw new Error("JWT_SECRET does not define in your environmental variable")
}

if(!process.env.GOOGLE_CLIENT_ID){
    throw new Error("GOOGLE_CLIENT_ID does not define in your environmental variable")
}

if(!process.env.GOOGLE_CLIENT_SECRET){
    throw new Error("GOOGLE_CLIENT_SECRET does not define in your environmental variable")
}

export const config = {
    MONGODB_URI : process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
}

