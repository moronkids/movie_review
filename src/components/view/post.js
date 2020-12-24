// import React from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// const View = (props) => {
//   return (
    // <Form>
    //   <FormGroup>
    //     <Label for="exampleText">Text Area</Label>
    //     <Input type="textarea" name="text" id="exampleText" />
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for="exampleFile">File</Label>
    //     <Input type="file" name="file" id="exampleFile" />
    //     <FormText color="muted">
    //       Write a Review
    //     </FormText>
    //   </FormGroup>
    //   </Form>
//   );
// }

// export default View;

import React, { Component } from "react";
import {
  Container,
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Form,
} from "reactstrap";
import axios from "axios";

class CrudAxiosPost extends Component {
  state = {
    appData: {
      id: null,
      title: "",
      body: "",
    },
    submit: [],
  };

  onType = (e) => {
    this.setState({
      submit: {
        ...this.state.submit,
        [e.target.name]: e.target.value,
      },
    });
  };

  onSend = () => {
    const data = this.state.submit;
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { data })
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    return (
      <>
      <Form>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Write a Review
          </FormText>
        </FormGroup>
      </Form>
      </>
    );
  }
}

export default CrudAxiosPost;

