import { useState, useEffect } from 'react'

function Courses() {

    const [courses, setCourses] = useState([])
   useEffect(() => {

     fetch("http://localhost:5050/course", {
        method: "GET",
        headers: {
            'Copntent-Type': "application/json",
            token: localStorage.getItem("token")
        }
    })
      .then(res => res.json())
      .then(data => setCourses(data))

   }, [courses])

  




   const deleteCourse = (course_id) => {

    fetch(`http://localhost:5050/course/${course_id}`, {
        method: "DELETE",
        headers: {
            'Copntent-Type': "application/json",
            token: localStorage.getItem("token")
        }
    }).then(res => res.json())
     .then(data => alert(data.msg))

   }



    return (
        <div className="courses container">
            <h1 align="center">Courses</h1>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    courses && courses.map((course, idx) => <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                    <td>{course.price}</td>
                    <td>
                        <i className='fa fa-edit text-primary' style={{ cursor: "pointer"}}></i>
                        <i className='fa fa-trash text-danger ml-4' style={{ cursor: "pointer"}} onClick={() =>deleteCourse(course.id)}></i>
                    </td>
                </tr>)
                   }
                </tbody>
            </table>



        </div>
    )
}

export default Courses
