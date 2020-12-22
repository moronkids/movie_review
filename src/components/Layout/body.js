import React from 'react';
import "assets/scss/styles.scss";
const body = (props) => {
    return (
      <div className="container ">
        <div className="pl-2 pr-2 body">{props.children}</div>
</div>
    );
};

export default body;