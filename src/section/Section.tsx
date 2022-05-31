import React from "react";
import SectionLeftContainer from "./section-left-container/SectionLeftContainer";
import SectionRightContainer from "./section-right-container/SectionRightContainer";
import "./Section.css"

function Section() {
    return (
        <div className="section">
            <div className="section-container">
                <SectionLeftContainer></SectionLeftContainer>
                <SectionRightContainer></SectionRightContainer>
            </div>
        </div>
    );
}

export default Section;