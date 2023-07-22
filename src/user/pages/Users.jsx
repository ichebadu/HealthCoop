import React from 'react';
import UsersList from '../components/UsersList';
import welcome_pix from'../../assets/frame.png';

const Users = () => {
    const USERS = [
        {
            id:'u1',
            name:'John',
            image:welcome_pix,
            // image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA3nrnnBp6yU7DQ0d7LgG5b09ToxA3X4m4jvFwUyYf1g&s',
            places: 5
        }
    ];
    return (
        <>
        

<UsersList items = {USERS} />

</>
)
};
export default Users;   


