import React from 'react';
import Characters from 'components/Character/index'

const Character = (props) => {
    return (
        <div>
            <Characters dummy={props.dummy} />
        </div>
    );
};

export default Character;