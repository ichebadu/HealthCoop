import React from 'react'

import UserItems from './UserItem';
import Card from '../../shared/components/UIElement/Card'
import './UsersList.css';

const UsersList = props => {
    if(props.items.length === 0){
       
        return (
            <div className="center">
                <Card><h2>No user Found.</h2>
                </Card>
                </div>
        ); 
    };
 
return (
    <ul className="users-list">
        {props.items.map(user => {
            return (
                <UserItems 
                key={user.id}
                id={user.id} 
                image={user.image}
                name={user.name} 
                placeCount={user.places} />
                
            )
        })}
    </ul>
    )
};

export default UsersList;