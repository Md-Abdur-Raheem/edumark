import { useEffect } from "react";
import { useState } from "react"

const useAllAddedCourse = () => {
    const [allAddedCourse, setAllAddedCourse] = useState([]);
    useEffect(() => {
        fetch('https://floating-ridge-99224.herokuapp.com/allAddedCourse')
            .then(res => res.json())
            .then(data => setAllAddedCourse(data))
    }, [])
    return [allAddedCourse]
}

export default useAllAddedCourse;