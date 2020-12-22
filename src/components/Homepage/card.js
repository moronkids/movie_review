import React from 'react';
import {Homepage} from "data_dummy/homepage"
const Card = () => {
    console.log(Homepage)
    return (
      <div className="d-flex flex-wrap">
        {Homepage.map((val) => { //map, foreach, while, do while, for
          return (
            <>
              <div className="col-auto mx-auto">
                <img className="m-2 mx-auto" src={val.image} width="150" />
                <p>{val.title}</p>
                <p>{val.category}</p>
              </div>
            </>
          );
            })}
      </div>
    );
};

export default Card;