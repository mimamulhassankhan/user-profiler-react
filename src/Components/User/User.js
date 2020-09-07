import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faEnvelope, faBuilding, faVenusMars, faUserMd, faPlus} from '@fortawesome/free-solid-svg-icons'
import './User.css'

const User = (props) => {
    console.log(props.user);
    const {full_name, avater, company_name, address, email, gender, designation} = props.user;
    return (
        <div>
            <div className="userBody">
                <div className="userFullName">
                    {
                        <h3>{full_name}</h3>
                    }
                </div>
                <div className="userDetailsSection user">
                    <div className="userImageArea">
                        <img src={avater} alt="user"/>
                    </div>
                    <div className="userInformation user"> 
                        <h5><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon> {"  "+company_name}</h5>
                        <h5><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> {"  "+address}</h5>
                        <h5><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{"  "+email}</h5>
                    </div>
                    <div className="userJobInfo user">
                        <h5><FontAwesomeIcon icon={faVenusMars}></FontAwesomeIcon>{"  "+gender}</h5>
                        <h5><FontAwesomeIcon icon={faUserMd}></FontAwesomeIcon>{"  "+designation}</h5>
                    </div>
                </div>
                <div className="footerArea">
                    <button className="btnAddFriend">Add Friend <FontAwesomeIcon icon={faPlus}/></button>
                </div>
            </div>
        </div>
    );
};

export default User;