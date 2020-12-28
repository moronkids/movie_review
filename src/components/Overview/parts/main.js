import React from "react";

const main = (props) => {
  console.log(props,"child")
  return (
    <div>
      <div className="d-flex">
        <div className="pl-0 pr-1 col-auto my-auto text-sub-overview">
          Synopsis
        </div>
        <div className="pl-1 col my-auto">
          <hr />
        </div>
      </div>
      <div className="">{props.dummy.data[0].Sinopsis}</div>
      <div className="d-flex">
        <div className="pl-0 pr-1 col-auto my-auto text-sub-overview">
          Movie Info
        </div>
        <div className="pl-1 col my-auto">
          <hr />
        </div>
      </div>
      <div className="">
        <table className="">
          <td>
            <tr className="">Release Date</tr>
            <tr className="">Director</tr>
            <tr className="">Writer</tr>
            <tr className="">Duration</tr>
          </td>
          <td>
            <tr className="">: {props.dummy.data[0].release}</tr>
            <tr className="">: {props.dummy.data[0].Director}</tr>
            <tr className="">: {props.dummy.data[0].Writer}</tr>
            <tr className="">: {props.dummy.data[0].Duration}</tr>
          </td>
        </table>
      </div>
    </div>
  );
};

export default main;
