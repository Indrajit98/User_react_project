import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FriendDetail.css'

const FriendsDetail = () => {
    let {FriendId} = useParams();
    const [details,setDetails] = useState([]);
    const {name,username,email,phone,website} = details;

    useEffect(() => {
        const url=(`https://jsonplaceholder.typicode.com/users/${FriendId}`)
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))

    },[])

    return (
        <div>
            <h2>Friends Detail</h2>
            <div className="friendDetail">
            <h4>Id: {FriendId}</h4>
            <h4>Name: {name}</h4>
            <p>User Name: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website : {website}</p>
            </div>
            
        </div> 
    );
};

export default FriendsDetail;