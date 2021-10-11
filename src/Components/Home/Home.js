import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Home.css'
import img from '../../media/banner.png'
import numbers from '../../media/numbers.png'
import PopularCourses from '../PopularCourses/PopularCourses';
import { useHistory } from 'react-router';

const Home = () => {
    const history1 = useHistory();
    const history2 = useHistory();
    const handleBrowseBtn = () => {
        history1.push('/courses')
    }
    const handleEnrollBtn = () => {
        history2.push('/courses')
    }

    return (
        <div>
            <div className= "hero-container">
                <Container style={{ height:"850px"}} className="d-flex justify-content-cneter align-items-center">
                <img src={img} alt="" />
                <div className="ms-5 text-start">
                    <h1 className = "mb-5">Learn Your <br />Favorite Course <br />From Online</h1>
                    <Button onClick = {handleBrowseBtn} className = "browse-btn mt-1">Browse Our Courses</Button>
                </div>
                </Container>
            </div>
            <Container>
            <div className=" d-flex justify-content-center align-items-center tutorials">
                <div className = "text-start">
                    <h1>Over 7000 Tutorials <br /> from 20 Courses</h1>
                    <p>Join to learn online. Build skills with courses from high quality instructors. Bring flexible, affordable, job-relevant online learning to individuals.Register now. Best Price Tuition. Top Quality Course. Thousands of New Courses. The Best Team of Teachers.</p>
                    <Button onClick = {handleEnrollBtn} className = "browse-btn mt-1">Enroll a Course</Button>
                </div>
                <div>
                    <img src={numbers} alt="" />
                </div>

            </div>
            </Container>
            <PopularCourses></PopularCourses>
        </div>
    );
};

export default Home;