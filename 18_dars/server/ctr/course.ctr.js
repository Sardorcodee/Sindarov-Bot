const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const { read_file, write_file } = require("../fs/fs_api");

let courses = read_file("courses.json")



const createCourse = async (req, res) => {

    const { title, price } = req.body

    let getUserInfo = await jwt.verify(req.headers.token, process.env.SECRET_KEY);



    let course = {
        id: uuid.v4(),
        title,
        price,
        user_id: getUserInfo.id
    }


    courses.push(course)

    write_file("courses.json", courses)

    
   return res.status(201).json({
    msg: 'Created!'
   })
}
const getCourses = async(req, res) => {
    console.log(req.headers);
    let getUserInfo = await jwt.verify(req.headers.token, process.env.SECRET_KEY);

   let getData = courses.filter(c => c.user_id === getUserInfo.id)

   return res.status(200).json(getData)
}

const getCourse = (req, res) => {
    res.send("get one")
}

const deleteCourse = async(req, res) => {
    const { id } = req.params
    let getUserInfo = await jwt.verify(req.headers.token, process.env.SECRET_KEY);

    let courseList = courses.filter(c => c.user_id === getUserInfo.id);

    let foundedCourse = courseList.find(c => c.id === id);

    if(!foundedCourse) return res.status(404).json({ msg: "Course not found!" })

    courses.forEach((course, idx) => {
        if(course.id === id){
            courses.splice(idx, 1)
        }
    })

    write_file("courses.json", courses)

    return res.status(200).json({ msg: 'Deleted!' })
    
}

const updateCourse = (req, res) => {
    res.send("update one")
}


module.exports = {
    createCourse,
    getCourse,
    getCourses,
    deleteCourse,
    updateCourse
}