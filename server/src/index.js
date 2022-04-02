const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB connection is successful")
}).catch((err)=>{
    console.log(err)
})
const server = app.listen(process.env.PORT, ()=>{
    console.log(`server is running on the ${process.env.PORT}`)
})