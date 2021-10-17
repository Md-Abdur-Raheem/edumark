import { useEffect, useState } from "react"
import { getStoredCourses } from "../../Components/utilities/localStorage";

const useCourses = courses =>{
    const [course, setCourse] = useState([]);

    useEffect(() => {
        if (courses.length) {
            const savedCourse = getStoredCourses();
            console.log(savedCourse);
            const storedCourse = [];
            for (const key in savedCourse) {
                const addedCourses = courses.find(course => course.courseId == key);
                console.log(addedCourses);
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