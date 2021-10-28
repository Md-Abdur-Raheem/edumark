import { useEffect, useState } from "react"
import { getStoredCourses } from "../../Components/utilities/localStorage";

const useCourses = (updating) =>{
    const [course, setCourse] = useState([]);

    useEffect(() => {
            const savedCourse = getStoredCourses();
            const id = Object.keys(savedCourse);
            fetch('https://floating-ridge-99224.herokuapp.com/all-courses/byCourseId', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(id)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.length) {
                        const storedCourse = [];
                        for (const key in savedCourse) {
                            const addedCourses = data.find(course => parseInt(course.courseId) === parseInt(key));
                            if (addedCourses) {
                                storedCourse.push(addedCourses);
                            }
                        }
                        setCourse(storedCourse);
                }
            })
            
    }, [updating])
    
    return [course, setCourse];
}

export default useCourses;