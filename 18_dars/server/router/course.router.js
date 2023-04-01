const { Router } = require('express');


const router = Router();
const { createCourse, getCourse, getCourses, deleteCourse, updateCourse } = require("../ctr/course.ctr")


router.route("/course")
   .get(getCourses)
   .post(createCourse)


router.route("/course/:id")
 .get(getCourse)
 .delete(deleteCourse)
 .put(updateCourse)


 router.all("*", (req, res) => {
    res.send(`<h1>Not found</h1>`)
 })





module.exports = router;