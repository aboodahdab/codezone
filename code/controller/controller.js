const { validationResult } = require("express-validator");
let Course=require("../modules/course.module")
const httpStatusText=require("../utlis/httpStatusText")
let asyncWrapper=require("../asyncWrapper")
console.log(Course)
const getAllCourses=async(req,res) => {
  const query=req.query
  console.log(query)
  const limit = query.limit||2
  const page=query.page||1
  const skip=(page-1)*limit
  const courses=await Course.find({},{__v:false}).limit(limit).skip(skip)
      res.json({status:httpStatusText.SUCCESS,data:{courses}})

    }

const addCourse=async (req, res) => {
const errors = validationResult(req);

    console.log("errors",errors)
    if (!errors.isEmpty()) {
      return res.status(400).json(  {status:httpStatusText.FAIL,data:{errors:errors.array()}});
    }
    const newCourse= new Course(req.body)
    await newCourse.save()
res.status(201).json({status:httpStatusText.SUCCESS,data:{course:newCourse}});
  }

 

  const getCourse= asyncWrapper( async (req,res)=>{
// try{
    const course =await Course.findById(req.params.courseId)
    if(!course){
     return  res.status(404).json({status:httpStatusText.FAIL,data:{course:"course not found "}}) 
//}
return res.status(200).json({status:httpStatusText.SUCCESS,data:{course}})}
    // catch (err) {
      return res.status(400).json(  {status:httpStatusText.ERROR,data:null,message:err.message,code:400}  ) }
      )

 
  const updateCourse= async(req, res) => {
    const courseId= req.params.courseId

    try{
const updatedCourse = await Course.updateOne({_id:courseId },{$set:{...req.body}})
res.status(200).json({status:httpStatusText.SUCCESS,data:{course:updateCourse}})}
   catch(err){
      return res.status(404).json({status:httpStatusText.ERROR,message:err.message})}
    }

  const deleteCourse=async(req, res) => {
const data=await Course.deleteOne({_id:req.params.courseId})
    res.status(200).json({status:httpStatusText.SUCCESS,data:null});
  }

  module.exports={
    getAllCourses 
    ,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
  }