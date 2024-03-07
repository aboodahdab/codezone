const express = require("express");
const app = express();
const url="mongodb+srv://rayramakh:rama1234567890rama@cluster0.0b2ybxl.mongodb.net/codezonea"
app.use(express.json());
const mongoose=require("mongoose")
mongoose.connect(url).then(()=>{
  console.log("mongodb server started")
})

let courseRouter=require("./routes/courses.route")
app.use("/api/courses",courseRouter)
app.listen(3200, () => {
  console.log("listeng on port 3200");
});
 