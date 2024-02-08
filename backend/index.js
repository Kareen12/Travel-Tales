const express=require('express')
const app=express()
const connection = require("./db");
const dotenv=require('dotenv')
const multer=require('multer')
const path=require("path")
require('dotenv').config();
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/posts')
const commentRoute=require('./routes/comments')
const cookieParser=require('cookie-parser')
const cors=require('cors')


app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:"https://traveltales-l353upnic-kareenujjainiya222-gmailcom.vercel.app/",credentials:true}))
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentRoute)

//image upload
const storage=multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
        // fn(null,"image1.jpg")
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    // console.log(req.body)
    res.status(200).json("Image has been uploaded successfully!")
})



const port = process.env.PORT || 8080;

app.listen(process.env.PORT,()=>{
    console.log("App is running on port " + port)
});

connection();