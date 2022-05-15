import React from "react";
import CourseCard from "../CourseCard";
import AerolitoVoador from "../IMG/aerolito-voador.jpg";
import PedraLeve from "../IMG/pedra-leve.jpg";
import Container from "../IMG/container-de-asteroides.jpg";
const Courses = () => {
    return (
        <main>
        <section className="courses-section">
                <CourseCard photo={AerolitoVoador} />
                <CourseCard photo={Container}/>
                <CourseCard photo={PedraLeve}/>
        </section>
    </main>
    )
}

export default Courses;