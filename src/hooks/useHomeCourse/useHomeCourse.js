import { useEffect, useState } from "react"

const useHomeCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./homeData.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return [courses, setCourses];
}
export default useHomeCourse;