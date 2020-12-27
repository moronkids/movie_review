import React from 'react';
import { Spinner } from "reactstrap";
const spinner = () => {
    return (
      <div className="d-flex">
        <div className="mx-auto">
          <Spinner color="primary" />
        </div>
      </div>
    );
};

export default spinner;