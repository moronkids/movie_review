import React, {useState, useEffect} from 'react';

const Category = () => {
    const [toggle, setToggle] = useState("1");
    const addActive = (e) => {
        setToggle(e);
        // e.target.className === "mr-3 list-category active"
        //   ? (e.target.className = "mr-3 list-category")
        //   : (e.target.className = "mr-3 list-category active");

    }
    const classn = "mr-3 list-category";
    return (
      <div>
        <div className="mt-3">
          <span className="text-category-main">Browse by Category</span>
        </div>
        <div className="">
          <span
            id="1"
            onClick={(e) => addActive("1")}
            className={classn + (toggle === "1" ? " active" : "")}
          >
            all
          </span>
          <span
            id="2"
            onClick={(e) => addActive("2")}
            className={classn + (toggle === "2" ? " active" : "")}
          >
            sample
          </span>
          <span
            id="3"
            onClick={(e) => addActive("3")}
            className={classn + (toggle === "3" ? " active" : "")}
          >
            sample
          </span>
          <span
            id="4"
            onClick={(e) => addActive("4")}
            className={classn + (toggle === "4" ? " active" : "")}
          >
            sample
          </span>
        </div>
      </div>
    );
};

export default Category;