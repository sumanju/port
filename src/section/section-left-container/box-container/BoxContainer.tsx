import React from "react";
import "./BoxContainer.css"

function BoxContainer(props : any) {
    return (
        <div className="boxContainer">
            <span className="title">{props.data.title}</span>
            {
                props.data.skills.map((skill : string, idx : number) =>
                    <span key={idx} className="skill">{skill}</span>
                )
            }
        </div>
    )
}

export default BoxContainer;