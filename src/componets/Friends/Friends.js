import React from "react";
import { Link } from "react-router-dom";
import "./Friends.css";

const Friends = (props) => {
  const { name, email, id } = props.friend;
  return (
    <div className="friend">
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
        <h5>
          <Link to={`/friend/${id}`}>
            <button>Click here friend details {id}</button>
          </Link>
        </h5>
      </div>
  );
};

export default Friends;
