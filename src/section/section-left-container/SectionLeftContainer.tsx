import React from "react";
import BoxContainer from "./box-container/BoxContainer";
import "./SectionLeftContainer.css";

export interface Talent {
    title   :   string,
    skills  :   string[]
};

function SectionLeftContainer() {
    let values : Talent[] = [{
            title : "Programming Language",
            skills : [
                "C++",
                "JAVASCRIPT",
                "JAVA"]
        },
        {
            title : "Technology",
            skills: [
                "REACT",
                "ANGULAR",
                "NODEJS"
            ]
        },
        {
            title : "Soft Skills",
            skills: [
                "HUMBLE",
                "SOMENAY",
                "HAPPY"
            ]
        }
    ];

    return (
        <div className="left-cont">
            {
                values.map((value : Talent, idx) =>
                    <BoxContainer key={idx} data={value} />
                )
            }
        </div>
    );
}

export default SectionLeftContainer;