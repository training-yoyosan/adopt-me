import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index, // + coerces it to an int,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="flex justify-center items-start gap-2 mx-auto">
        <img src={images[active]} alt="animal" className="rounded max-h-96" />
        <div className="grid gap-3 grid-cols-5">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              data-index={index}
              onClick={this.handleIndexClick}
              key={photo}
              src={photo}
              className={(index === active ? "active" : "") + " max-h-24"}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
