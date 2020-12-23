import React from 'react';
import {Homepage} from "data_dummy/homepage"
const Card = () => {
    console.log(Homepage)
    return (
      <div className="d-flex flex-wrap mx-auto">
        {Homepage.map((val) => { //map, foreach, while, do while, for
          return (
            <>
              <div className="col-auto mx-auto m-md-0">
                <img className="cardx" src={val.image} />
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