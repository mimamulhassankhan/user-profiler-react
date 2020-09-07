import React, { useState, useEffect } from 'react';
import './UserSection.css';
import data from '../../fakeData/userData.json'
import User from '../User/User';

const UserSection = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(data);
    },[])
    
    return (
        <div className="userProfileSection">
            <div className="userContainer">
                {
                    users.map(user => <User user={user} key={user.id} />)
                }
            </div>
            <div className="friendCollectionContainer">
                <h1>This is Collection</h1>
            </div>
        </div>
    );
};

export default UserSection;