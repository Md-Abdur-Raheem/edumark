import { useEffect } from "react";
import { useState } from "react"

const useFullCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://floating-ridge-99224.herokuapp.com/all-courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return [courses, setCourses];
}
export default useFullCourse;