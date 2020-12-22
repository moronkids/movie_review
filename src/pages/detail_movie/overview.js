import React from "react";
import Overview from "components/Overview/index";

const overview = (props) => {

  return (
    <div>
      <Overview  dummy={props.dummy}/>
    </div>
  );
};

export default overview;
