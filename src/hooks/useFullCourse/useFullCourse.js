import { useEffect } from "react";
import { useState } from "react"

const useFullCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return [courses, setCourses];
}
export default useFullCourse;