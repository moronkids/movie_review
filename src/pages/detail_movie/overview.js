import React from "react";
import Overview from "components/Overview/index";

const overview = (props) => {
console.log(props, "1")
  return (
    <div>
      <Overview  dummy={props.dummy}/>
    </div>
  );
};

export default overview;
