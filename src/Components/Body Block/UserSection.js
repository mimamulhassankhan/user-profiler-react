import React, { useState, useEffect } from 'react';
import './UserSection.css';
import data from '../../fakeData/userData.json'
import User from '../User/User';
import FriendRequest from '../Friend Request/FriendRequest';

const UserSection = () => {
    const [users, setUsers] = useState([]);
    const [friendReqs, setFriendReqs] = useState([]);

    useEffect(() => {
        setUsers(data);
    },[]);

    const addToFriendReq = (friend) => {
        const newFriendReqs = [...friendReqs, friend];
        setFriendReqs(newFriendReqs);
    }
    
    return (
        <div className="userProfileSection">
            <div className="userContainer">
                {
                    users.map(user => <User clickHandler={addToFriendReq} user={user} key={user.id} />)
                }
            </div>
            <div className="friendCollectionContainer">
                <FriendRequest friendReq={friendReqs} />
            </div>
        </div>
    );
};

export default UserSection;