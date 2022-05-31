import React from "react";
import "./ExperienceBox.css"

function ExperienceBox(props : any) {
    return (
        <div className="exp-box-cont">
            <div className="exp-box-hdr">
                <img className="exp-box-hdr-img" src={props.data.image} alt=""/>
                <div className="exp-box-hdr-inf">
                    <span>{props.data.companyName}</span>
                    <span>{props.data.startdate + ' - ' +  props.data.endDate}</span>
                </div>
            </div>
            <div className="exp-box-desc">
                <p>
                    {props.data.description}
                </p>
            </div>
        </div>
    )
}

export default ExperienceBox;