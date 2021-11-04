import { useEffect } from "react";
import { useState } from "react"

const useAllAddedCourse = () => {
    const [allAddedCourse, setAllAddedCourse] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allAddedCourse')
            .then(res => res.json())
            .then(data => setAllAddedCourse(data))
    }, [])
    return [allAddedCourse]
}

export default useAllAddedCourse;