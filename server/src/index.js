const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const userRoutes = require("./routes/user.route")

require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", userRoutes)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB connection is successful")
}).catch((err)=>{
    console.log(err)
})
 app.listen(process.env.PORT, ()=>{
    console.log(`server is running on the ${process.env.PORT}`)
})