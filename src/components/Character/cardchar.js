import React from "react";
import { Character } from "data_dummy/character";

const characterCard = () => {
  console.log( Character );
  return (
    <div className="d-flex flex-wrap mx-auto">
        {Character.map((val) => {
          //map, foreach, while, do while, for
          return (
            <>
              <div className="col-auto mb-2 m-md-0 mx-auto ">
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

export default characterCard;