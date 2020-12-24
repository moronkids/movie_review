import React from "react";
import { Homepage } from "data_dummy/homepage";

const Card = () => {
  console.log(Homepage);
  return (
    <div className="d-flex flex-wrap mx-auto">
        {Homepage.map((val) => {
          //map, foreach, while, do while, for
          return (
            <>
              <div className="col-auto m-md-0 mx-auto ">
                <img className="cardx" src={val.image} />
                <p style={({ color: "white" }, { fontSize: "20px" })}>
                  {val.title}
                </p>
                <p style={{ marginTop: "-25px" }}>{val.category}</p>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Card;
