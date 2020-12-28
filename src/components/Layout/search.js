import React from 'react';

const Search = (props) => {
  console.log("ini props eror", props)
    let classx;
    if(props.show === "mobile") classx ="d-block d-md-none mx-auto mt-2"
    if(props.show === "web") classx =" d-md-block d-none mx-auto mt-2"
      return (
          <div className="col col-sm-4">
              <input
                  className="form-control"
                  value={props.value}
                  onChange={(event) => props.setSearchValue(event.target.value)}
                  placeholder='Type to search...'
              ></input>
          </div>
      )
    
    //   <>
    //     <input
    //       className={classx}
    //       placeholder="Search Movie"
    //     ></input>
    //   </>
    // );
};


export default Search;