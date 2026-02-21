let { courses } = require("../data/courses");
const { validationResult } = require("express-validator");

const getAllCourses = (req, res) => {
  res.json(courses);
};

const getSingleCourse = (req, res) => {
  const courseId = +req.params.courseId;
  const course = courses.find((course) => course.id === courseId);
  if (!course) return res.status(404).json({ msg: "course not found" });
  res.status(200).json(course);
};

const addCourse = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  const course = { id: courses.length + 1, ...req.body };
  courses.push(course);
  res.status(201).json(course);
  console.log(courses);
};

const updateCourse = (req, res) => {
  const courseId = +req.params.courseId;
  let course = courses.find((course) => course.id === courseId);

  if (!course) return res.status(404).json({ msg: "course not found" });

  course = { ...course, ...req.body };

  res.status(200).json(course);
};

const deleteCourse = (req, res) => {
  const courseId = +req.params.courseId;
  const index = courses.findIndex((c) => c.id === courseId);

  if (index === -1) {
    return res.status(404).json({ message: "course not found" });
  }

  courses.splice(index, 1);
  res.status(200).json({ message: "course deleted" });
};

module.exports = {
  getAllCourses,
  getSingleCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
