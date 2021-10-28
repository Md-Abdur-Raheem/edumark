import { useEffect, useState } from "react"
import { getStoredCourses } from "../../Components/utilities/localStorage";

const useCourses = courses =>{
    const [course, setCourse] = useState([]);

    useEffect(() => {
        if (courses.length) {
            const savedCourse = getStoredCourses();
            const storedCourse = [];
            for (const key in savedCourse) {
                const addedCourses = courses.find(course => parseInt(course.courseId) === parseInt(key));
                if (addedCourses) {
                    storedCourse.push(addedCourses);
                }
            }
            setCourse(storedCourse);
        }
    }, [courses])
    
    return [course, setCourse];
}

export default useCourses;