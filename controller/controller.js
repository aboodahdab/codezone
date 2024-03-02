const { validationResult } = require("express-validator");
let { courses } = require("../data/courses"); console.log(courses)
const addCourse=(req, res) => {
    courses.push({ id: courses.length + 1, ...req.body });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array() });
    }
    console.log("errors", errors);
    res.status(201).json(courses);
  }

  const getAllCourses=(req,res) => {
    res.json(courses)
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