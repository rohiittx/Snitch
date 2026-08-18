import { config } from "../config/config.js";
import userModel from "../models/user.model.js";   
import jwt from "jsonwebtoken"


async function generateToken(user, res, message) {

    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
        expiresIn: "7d"
    })

    res.cookie("token", token)

    res.status(200).json({
        message,
        success: true,
        user:{
            id:user._id,
            email:user.email,
            fullName:user.fullName,
            contact:user.contact,
            role:user.role
        }
    })
    
}

export async function register(req, res) {

    try{
        // console.log("REGISTER BODY:", req.body)
        
        const {email, contact, fullName, password, isSeller } = req.body

        const isUserExist = await userModel.findOne({
            $or:[
                { email } , { contact }
            ]
        })

        if(isUserExist){
        return res.status(400).json({ message: "User already exists" })
        }

        const user = await userModel.create({
            email,
            contact,
            fullName,
            password,
            role: isSeller ? "seller" : "buyer"
        })

        await generateToken(user, res, "User created successfully")

        res.status(201).json({ message: "User created successfully", user })

    }catch (error) {
        console.log("REGISTER ERROR:", error)

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }

}

export async function login(req, res) {
    try{
        // console.log("LOGIN BODY:", req.body)

        const { email, password , contact } = req.body

        const user = await userModel.findOne({ $or: [{ email }, { contact }] })

        if(!user){
            return res.status(404).json({ message: "User not found" })
        }

        const isPasswordValid = await user.comparePassword(password)

        if(!isPasswordValid){
            return res.status(400).json({ message: "Invalid password" })
        }

        await generateToken(user, res, "Login successful")

    }catch (error) {
        console.log("LOGIN ERROR:", error)

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }

}
  