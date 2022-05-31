import React from "react";
import ExperienceBox from "./experience-box/ExperienceBox";
import "./Experience.css"

function Experience() {
    let info = [
        {
            companyName :   'SAP Labs',
            startdate   :   '22 March, 2021',
            endDate     :   'Present',
            description :   'The Indian subcontinent, the great landmass of South Asia, is the home of one of the world’s oldest and most influential civilizations. In this article, the subcontinent, which for historical purposes is usually called simply “India,” is understood to comprise the areas of not only the present-day Republic of India but also the republics of Pakistan (partitioned from India in 1947) and Bangladesh (which formed the eastern part of Pakistan until its independence in 1971). For the histories of these latter two countries since their creation, see Pakistan and Bangladesh.',
            image       :   'Images/sap_icon.jpeg',
        },
        {
            companyName :   'Obopay',
            startdate   :   '1 July, 2019',
            endDate     :   '22 March, 2021',
            description :   'The Indian subcontinent, the great landmass of South Asia, is the home of one of the world’s oldest and most influential civilizations. In this article, the subcontinent, which for historical purposes is usually called simply “India,” is understood to comprise the areas of not only the present-day Republic of India but also the republics of Pakistan (partitioned from India in 1947) and Bangladesh (which formed the eastern part of Pakistan until its independence in 1971). For the histories of these latter two countries since their creation, see Pakistan and Bangladesh.',
            image       :   'Images/Obopay_icon.jpeg'
        }
    ]
    return (
        <div>
            {
                info.map((info, idx) =>
                    <ExperienceBox key={idx} data={info}></ExperienceBox>
                )
            }
        </div>
    )
}

export default Experience;