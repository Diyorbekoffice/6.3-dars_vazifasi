import React from 'react';
import './index.css';


function Card(props) {
    const { userName, email, nat, desc } = props.user
    return (
        <div className='card'>
            <div className="card-title">
                <h3>{userName}</h3>
                <p>Email: {email}</p>
                <p>Nationality: {nat}</p>
                <p>Description: {desc}</p>
            </div>
        </div>
    );
}

export default Card;


