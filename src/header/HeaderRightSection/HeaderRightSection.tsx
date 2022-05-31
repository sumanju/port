import React from 'react';
import './HeaderRightSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMailchimp } from '@fortawesome/free-brands-svg-icons'

function HeaderRightSection() {
    return (
        <React.Fragment>
            <div className='connection-icon'>
                <a href="https://github.com/sumanju">
                    <FontAwesomeIcon style={{'color': 'black'}} className='icon' icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/suman-mandal-3377a816b/">
                    <FontAwesomeIcon style={{'color': '#0b66c2'}} className='icon' icon={faLinkedin} />
                </a>
                <a href="mailto:sumanmandal2126@gmail.com">
                    <FontAwesomeIcon style={{'color': 'red'}} className='icon' icon={faMailchimp} />
                </a>
            </div>
        </React.Fragment>
    );
}

export default HeaderRightSection;