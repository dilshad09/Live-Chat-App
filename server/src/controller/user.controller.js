const User = require("../models/user.model")
const bcrypt = require("bcrypt")

const register = async (req, res,next)=>{
    try {
        const {username, email, password} = req.body;
        const usernameCheck = await User.findOne({username})

        if(usernameCheck){
            return res.json({msg:"username already used", status:false})   
        }
        const emailCheck = await User.findOne({email})

        if(emailCheck){
            return res.json({msg:"Email already used", status:false})   
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            email,
            username,
            password:hashedPassword
        })
        delete user.password;
        res.json({status:true, user})
    } catch (error) {
        next(error)
    }
}
module.exports = register;