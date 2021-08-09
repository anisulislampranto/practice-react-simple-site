import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Users.css'

const Users = (props) => {
    const { name, phone, email, salary, image } = props.user;
    return (
        <div className='users'>

            <div className='user-container' >
                <div className='user-image' >

                    <img src={image} alt="" srcset="" />

                </div>
                <div className='user-detail' >
                    <h1>{name}</h1>
                    <h4>Phone: {phone}</h4>
                    <h4>E-mail: {email}</h4>
                    <h4> Salary per annum: ${salary}</h4>
                    <button
                        onClick={() => props.handleAddProduct(props.user)} 
                        className='add-button' >
                        <FontAwesomeIcon icon={faPlus} /> Add </button>
                </div>

            </div>
            

        </div>





    );
};

export default Users;