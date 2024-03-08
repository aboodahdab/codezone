
const {body}=require("express-validator")
const validationSchema=(req,res)=>{
  console.log(  [
    body("title")
      .notEmpty()
      .withMessage("title is required")
      .withMessage("title at least is 2 digits"),
    body("price").notEmpty().withMessage("price is required"),
  ])
    return     [
        body("title")
          .notEmpty()
          .withMessage("title is required")
          .withMessage("title at least is 2 digits"),
        body("price").notEmpty().withMessage("price is required"),
      ]
}

module.exports={validationSchema}