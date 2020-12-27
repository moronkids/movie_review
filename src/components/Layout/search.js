import React from 'react';

const Search = (props) => {
    let classx;
    if(props.show === "mobile") classx ="d-block d-md-none mx-auto mt-2"
    if(props.show === "web") classx =" d-md-block d-none mx-auto mt-2"
    return (
      <>
        <input
          className={classx}
          placeholder="Search Movie"
        ></input>
      </>
    );
};

export default Search;