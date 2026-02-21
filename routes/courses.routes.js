const express = require("express");
const { body } = require("express-validator");

const coursesController = require("../controllers/courses.controllers");

const router = express.Router();

router
  .route("/")
  .get(coursesController.getAllCourses)
  .post(
    [
      body("title")
        .notEmpty()
        .withMessage("title is required")
        .isLength({ min: 2 })
        .withMessage("title at least 2 digits"),
      body("price").notEmpty().withMessage("price is required"),
    ],
    coursesController.addCourse,
  );

router
  .route("/:courseId")
  .get(coursesController.getSingleCourse)
  .patch(coursesController.updateCourse)
  .delete(coursesController.deleteCourse);

module.exports = router;
