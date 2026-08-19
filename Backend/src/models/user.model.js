import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true
    },
    fullName: {
        type:String,
        required: true,
    },
    contact:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: function(){ // agar hamara user google se register hua hai to password ki zarurat nahi hai, isliye humne ye condition lagayi hai
            return !this.googleId
        },
    },
    role:{
        type:String,
        enum: ["buyer", "seller"],
        default:"buyer"
    },
    googleId:{
        type:String,
        required:true
    }
}, {timestamps:true})

userSchema.pre("save", async function(){
    if(!this.isModified("password")) return 

    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

const userModel = mongoose.model("users", userSchema)

export default userModel;