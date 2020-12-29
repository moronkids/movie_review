import React, { Component } from "react";
import { Media } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from "react-star-rating-component";
class Komentar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.dummy.data[0].Rating
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
          {this.props.comment !== null
            ? this.props.comment.map((item) => {
                const { id, firstName, lastName, location, thumbnail } = item;
                return (
                  <div key={id} className="comment-review">
                    <Media className="mt-1">
                      <Media left middle href="#">
                        <img
                          className="favourite-image"
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F04%2FElon_Musk_and_Hans_Koenigsmann_at_the_SpaceX_CRS-8_post-launch_press_conference_%252826223624532%2529_%2528cropped%2529.jpg&f=1&nofb=1"
                          alt="Generic placeholder image"
                        />
                      </Media>
                      <br />
                      <Media className="teks-body" body>
                        <div style={{ fontSize: "30px" }}>
                          <StarRatingComponent
                            name="rate1"
                            className="teks-body"
                            starCount={5}
                            value={item.rating}
                          />
                        </div>
                        <Media heading>
                          {/* {firstName} {lastName} */}
                          {item.User}
                        </Media>
                        {item.review}
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
