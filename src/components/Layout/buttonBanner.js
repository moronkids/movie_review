import React from 'react';

const ButtonBanner = (props) => {
    console.log(props, "buton")
    let classx = ["d-flex text-center align-middle mr-3"];
    if(props.colorButton === "red") classx.push("button-banner-red")
    if(props.colorButton === "white") classx.push("button-banner-white");
    const datax = classx.join(" ")
    return (
      <div className={datax}>
        <div className="my-auto mx-auto button-banner-text">{props.children}</div>
      </div>
    );
};

export default ButtonBanner;