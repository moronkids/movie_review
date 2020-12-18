import React from 'react';
import IconPlay from "assets/images/play.svg";

const icon = (props) => {
  let root = ["d-flex pl-2 pl-md-0"];
  if(props.position === "absolute") root.push("position-absolute")
  let iconProps = ["d-flex icon-red align-middle my-auto"];
  if(props.center) iconProps.push("mx-auto");
  let textProps = ["my-auto pl-2"];
  if(props.textColor === "white") textProps.push("icon-text-white");
  if(props.textColor === "blue") textProps.push("icon-text-blue");
  root = root.join(" ");
  iconProps = iconProps.join(" ");
  textProps = textProps.join(" ");

    return (
      <div className={`${root}`}>
        <div className={`${iconProps}`}>
          <img width="20px" height="auto" className="mx-auto" src={IconPlay} />
        </div>
        <span className={`${textProps}`}>MilanTV</span>
      </div>
    );
};

export default icon;