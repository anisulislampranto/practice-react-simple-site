import React from 'react';
import './Summary.css'


const Summary = (props) => {
    const cart = props.cart;
    
    const salary = cart.reduce((total, user) => total + user.salary, 0 );

    return (
        <div className="summary" >
            <h1> Users Summery</h1>
            <p>Added Users: {cart.length} </p>
            <p>Total salary: ${salary} </p>
            

        </div>
    );
};

export default Summary;