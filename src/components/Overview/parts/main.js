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
      <div className="">
        {props.dummy.sinposis}
      </div>
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
            <tr className="">Featured Song</tr>
            <tr className="">Budget</tr>

          </td>
          <td>
            <tr className="">: {props.dummy.movie_info.release_data}</tr>
            <tr className="">: {props.dummy.movie_info.director}</tr>
            <tr className="">: {props.dummy.movie_info.featured_song}</tr>
            <tr className="">: {props.dummy.movie_info.budget}</tr>
          </td>
        </table>
      </div>
    </div>
  );
};

export default main;
