import { useEffect, useState } from "react"

const useHomeCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://floating-ridge-99224.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return [courses, setCourses];
}
export default useHomeCourse;