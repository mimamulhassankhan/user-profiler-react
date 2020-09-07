import React from 'react';

const FriendRequest = (props) => {
    const friendReq = props.friendReq;
    const totalSalary = friendReq.reduce((totalSalary, friend) => totalSalary + friend.salary,0);

    const alignStyle ={
        textAlign: 'left',
        paddingRight: '20px',
        position: 'sticky',
        top: '0'
    }
    return (
        <div style={alignStyle}>
            <h1>Friend Request Sumarry</h1>
            <h3>Request Sent : {friendReq.length}</h3>
            <h3>Total Salary: {totalSalary}</h3>
        </div>
    );
};

export default FriendRequest;