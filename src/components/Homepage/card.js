import React from 'react';
import {Homepage} from "data_dummy/homepage"


const Card = () => {
    return (
        <div className="d-flex flex-wrap">
            {Homepage(Map((val) => {
                return (
                    <div className="mx-auto">
                        <img className="m-2" src={val.image} width="150"/>
                        <p>{val.title}</p>
                        <p>{val.category}</p>
                    </div>
                );
            }))} 
        
        </div>
    );
};

export default Card;