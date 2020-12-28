import React, { Component } from "react";
import { Media } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

class Komentar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.dummy.data[0].star
    };
  }

  // componentDidMount() {
  //   //take random 10 result
  //   fetch("https://randomuser.me/api/?nat=GB&results=10 ")
  //     .then((res) => res.json())
  //     .then((parsedJSON) =>
  //       parsedJSON.results.map((data) => ({
  //         //mapping data sesuai kebutuhan
  //         id: `${data.id.name}`,
  //         firstName: `${data.name.first}`,
  //         lastName: `${data.name.last}`,
  //         location: `${data.location.state}, ${data.nat}`,
  //         thumbnail: `${data.picture.large}`,
  //       }))
  //     )
  //     .then((items) =>
  //       this.setState({
  //         items,
  //         isLoaded: false,
  //       })
  //     )
  //     .catch((error) => console.log("parsing failed", error));
  // }

  render() {
    const { items } = this.state;
    // const { items } = this.props.dummy.data[0].star;
    console.log(items, this.props, "cek");
    return (
      <div>
        <div className="boxWhite">
          {items.length > 0
            ? items.map((item) => {
                const { id, firstName, lastName, location, thumbnail } = item;
                return (
                  <div key={id} className="comment-review">
                    <Media className="mt-1">
                      <Media left middle href="#">
                        <img
                          className="favourite-image"
                          src={item.link}
                          alt="Generic placeholder image"
                        />
                      </Media>
                      <br />
                      <Media className="teks-body" body>
                        <Media heading>
                          {/* {firstName} {lastName} */}
                          {item.nama}
                        </Media>
                        React Js adalah sebuah library JavaScript yang di buat
                        oleh facebook. React bukanlah sebuah framework MVC.
                        React adalah library yang bersifat composable user
                        interface, yang artinya kita dapat membuat berbagai UI
                        yang bisa kita bagi menjadi beberapa komponen.
                      </Media>
                    </Media>
                    <br />
                    {/* <center><img src={thumbnail} alt={firstName} className="circle"/></center><br/>
                                <div className="info">
                                    {firstName} {lastName} <br/>
                                    {location} */}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default Komentar;
