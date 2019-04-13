import React from 'react';
import Card from './Card';

const CardArray = ({robots}) => {
        return(
                robots.map((robot) => {
                    return (
                            <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />                        
                    );
                })
        );
}
 export default CardArray;