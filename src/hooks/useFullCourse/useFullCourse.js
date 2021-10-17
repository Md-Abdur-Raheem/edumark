import { useEffect } from "react";
import { useState } from "react"

const useFullCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/fullData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return [courses, setCourses];
}
export default useFullCourse;