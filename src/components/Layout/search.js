import React from 'react';

const Search = (props) => {
    let classx;
    if(props.show === "mobile") classx ="d-block d-md-none mx-auto"
    if(props.show === "web") classx =" d-md-block d-none mx-auto"
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