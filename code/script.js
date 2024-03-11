require("dotenv").config()
const cors=require("cors")
const express = require("express");

const httpStatusText=require("./utlis/httpStatusText")
const app = express();
app.use(express.json());
app.use(cors())
const url=process.env.MONGO_URL
const mongoose=require("mongoose")
mongoose.connect(url).then(()=>{
  console.log("mongodb server started")
})



let courseRouter=require("./routes/courses.route")
app.use("/api/courses",courseRouter)
app.all("*",(req,res,next)=>{
res.status(404).json({status:httpStatusText.ERROR,message:"this source is not avalible"})
})


app.use((error,req,res,next)=>{
  let you="u"
  res.status(500).json({status:httpStatusText.ERROR,message:you})
  
  })


app.listen(process.env.PORT||3200, () => {
  console.log("listeng on port 3200");
});
 