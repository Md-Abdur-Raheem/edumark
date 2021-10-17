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
                <div style = {{height: "850px"}} className="row container mx-auto align-items-center">
                    <img className = "col-12 col-sm-12 col-lg-6" src={img} alt="" />
                    <div className=" col-12 col-sm-12 col-lg-6 ms-5 text-start">
                        <h1 className = "mb-5">Learn Your <br />Favorite Course <br />From Online</h1>
                        <Button onClick = {handleBrowseBtn} className = "more-btn mt-1">Browse Our Courses</Button>
                    </div>
                </div>
            </div>
            <Container>
            <div className="row mt-5 align-items-center justify-content-center tutorials">
                <div className = "col-lg-6 col-12 text-start">
                    <h1>Over 7000 Tutorials <br /> from 20 Courses</h1>
                    <p>Join to learn online. Build skills with courses from high quality instructors. Bring flexible, affordable, job-relevant online learning to individuals.Register now. Best Price Tuition. Top Quality Course. Thousands of New Courses. The Best Team of Teachers.</p>
                    <Button onClick = {handleEnrollBtn} className = "browse-btn mt-1">Enroll a Course</Button>
                </div>
                <div className = "col-lg-6 col-12">
                    <img src={numbers} alt="" />
                </div>

            </div>
            </Container>
            <PopularCourses></PopularCourses>
        </div>
    );
};

export default Home;