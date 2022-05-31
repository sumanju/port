import React from "react";
import "./DetailsContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faMapLocationDot, faMobileAndroid } from "@fortawesome/free-solid-svg-icons";

function DetailsContainer() {
    return (
        <div className="details-container">
            <div className="image-name">
                <img src='https://cdn.pixabay.com/photo/2016/01/10/21/06/eye-1132531_1280.jpg'
                    className='image'/>
                <div className="name">
                    <span>{"Suman Mandal (Software Engineer)"}</span>
                    <span>{"Age - 25years"}</span>
                </div>
            </div>
            <div className="information">
                <div className="details">
                    <FontAwesomeIcon className='icons' icon={faMapLocationDot} />
                    <span>Durg/Chhatisgarh/India</span>
                </div>
                <div className="details">
                    <FontAwesomeIcon className='icons' icon={faMobileAndroid} />
                    <span>+91-9123689979</span>
                </div>
                <div className="details">
                    <FontAwesomeIcon className='icons' icon={faMailBulk}/>
                    <span>sumanmandal21296@gmail.com</span>
                </div>
            </div>
        </div>
    );
}

export default DetailsContainer;