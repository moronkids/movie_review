import React from 'react';
import Header from 'components/Layout/header';
import Body from 'components/Layout/body';
import Footer from 'components/Layout/footer';
const index = (props) => {
    return (
      <>
        <Header/>
        <Body>{props.children}</Body>
        <Footer/>
      </>
    );
};

export default index;