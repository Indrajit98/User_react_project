import React, { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';
import './Home.css'

const Home = () => {
    const [friends,setFriends] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then (data => setFriends(data))
    
    },[])
    return (
        <div>
            <h1>Friends: {friends.length}</h1>
            <div className="cart">
           {
               friends.map(friends =><Friends friend={friends}></Friends>)
           }
           </div>
        </div>
    );
};

export default Home;