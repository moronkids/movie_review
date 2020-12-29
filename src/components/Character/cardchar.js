import React, {useState} from "react";
import { Character } from "data_dummy/character";

const CharacterCard = (props) => {
  console.log( props, "charac" );
  // const [data, setData]= useState(props.ada.star)
  return (
    <div className="d-flex flex-wrap mx-auto">
        {props.dummy.data[0].star.map((val) => {
          //map, foreach, while, do while, for
          return (
            <>
              <div className="col-auto mb-2 m-md-0 mx-auto ">
                <img className="cardx" src={val.link} />
                <p style={({ color: "white" }, { fontSize: "20px" })}>
                  {val.nama}
                </p>
                <p style={{ marginTop: "-25px" }}></p>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default CharacterCard;