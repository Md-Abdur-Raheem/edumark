import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../useAuth/useAuth";

const useAddedCourse = (control) => {
    const [addedCourse, setAddedCourse] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/addedCourse?email=${user.email}`)
        .then(res => res.json())
        .then(data =>  setAddedCourse(data))
    }, [user.email, control])
    return [addedCourse]
}
export default useAddedCourse;