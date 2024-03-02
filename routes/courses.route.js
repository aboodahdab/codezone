const express = require("express");

const validationSchema=require("../middlewares/validationSchema")
console.log(validationSchema)
const CoursesController=require("../controller/controller")
console.log(CoursesController.addCourse)
let router=express.Router()

router.route("/").get(CoursesController.getAllCourses)
.post(validationSchema,CoursesController.addCourse);

router.route("/:courseId").get(CoursesController.getCourse )
.patch(CoursesController.updateCourse)
.delete( CoursesController.deleteCourse);