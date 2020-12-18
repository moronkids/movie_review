import React from 'react';
import "assets/scss/styles.scss";
const body = (props) => {
    return (
      <div className="container body">
        <div className="pl-2 pr-2">
        {props.children}
        </div>
      </div>
    );
};

export default body;