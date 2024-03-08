const { validationResult } = require("express-validator");
let Course=require("../modules/course.module")

console.log(Course)
const getAllCourses=async(req,res) => {
  const courses=await Course.find()
      res.json(courses)

    }

const addCourse=async (req, res) => {
const errors = validationResult(req);

    
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array() });
    }
    const newCourse= new Course(req.body)
    await newCourse.save()
    res.status(201).json(newCourse)
  }

 

  const getCourse= (req, res) => {
    const courseId = +req.params.courseId;
    const course = courses.find((coursee) => coursee.id === courseId);
    if (!course) {
      return res.status(404).json({ msg: "course not found" });
    }
    res.json(course);
  }

  const updateCourse= (req, res) => {
    const courseId = +req.params.courseId;
    let course = courses.find((coursee) => coursee.id === courseId);
    if (!course) {
      return res.status(404).json({ msg: "course not found" });
    }
    course = { ...course, ...req.body };
    res.status(200).json(course);
  }
  const deleteCourse=(req, res) => {
    const courseId = +req.params.courseId;
    courses = courses.filter((course) => course.id !== courseId);
    res.status(200).json({ seccess: true });
  }

  module.exports={
    getAllCourses 
    ,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
  }