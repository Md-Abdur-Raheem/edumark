import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../useAuth/useAuth";

const useAddedCourse = () => {
    const [addedCourseId, setAddedCourseId] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/addedCourse?email=${user.email}`)
        .then(res => res.json())
            .then(data => setAddedCourseId(data))
    }, [user.email])
    return [addedCourseId]
}
export default useAddedCourse;