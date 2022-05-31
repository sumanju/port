import React from "react";
import "./SectionRightContainer.css";
import DetailsContainer from "./details-container/DetailsContainer";
import Experience from "./experience/Experience";
import Education from "./education/Education";

function SectionRightContainer() {
    return (
        <div className="right-container">
            <DetailsContainer></DetailsContainer>
            <Experience></Experience>
            <Education></Education>
        </div>
    );
}

export default SectionRightContainer;