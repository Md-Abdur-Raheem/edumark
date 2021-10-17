const addToDb = id => {
    const exists = getDb();
    let courses = {};
    if (!exists) {
       courses[id] = 1;
    }
    else {
        courses = JSON.parse(exists);
        if (courses[id]) {
            /* const newCount = courses[id] + 1;
            courses[id] = newCount; */
            alert("Already added");
            return;
        }
        else {
            courses[id] = 1;
        }
    }
    updateDb(courses);
}

const getDb = () => localStorage.getItem('courses');

const updateDb = course => localStorage.setItem('courses', JSON.stringify(course));

const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {
        
    }
    else {
        const courses = JSON.parse(exists);
        delete courses[id];
        updateDb(courses);
    }
}

const getStoredCourses = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}

const clearAllCourses = () => {
    localStorage.removeItem('courses');
}

export { addToDb, removeFromDb, clearAllCourses, getStoredCourses };
    
