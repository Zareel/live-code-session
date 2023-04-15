import mongoose, { mongo } from "mongoose";
import AuthRoles from "../utils/authRoles"

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: ["true", "Name is required"],
        maxLength: [50, "Name must be less than 50 chars"]
    },
    email:{
        type: String,
        required: ["true", "Email is required"],  

    },
    password:{
        type: String,
        required: ["true", "password is required"],
        minLength:[8, "password must contain atleast 8 chars"],
        select: false
    },
    role:{
        type: String,
        enum:Object.values(AuthRoles),
        default:AuthRoles.User
    },

    // forgot password fucnctionality
        forgotPasswordToken: String,
        forgotPasswordExpiry:Date,
}, {timestamps:true})

export default mongoose.model("User", userSchema)