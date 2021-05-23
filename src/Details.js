import { Component, lazy } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

const Modal = lazy(() => import("./Modal"));

class Details extends Component {
  // allowed by using @babel/plugin-proposal-class-properties
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState({
      loading: false,
      ...json.pets[0],
    });
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location = "https://bit.ly/pet-adopt");

  render() {
    if (this.state.loading) {
      return <h2 className="text-center">loading ...</h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div>
        <Carousel images={images} />
        <div className="flex flex-col gap-2 justify-center w-6/12 items-center mx-auto bg-gray-300 rounded p-3 my-3">
          <h1 className="text-2xl font-bold">{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
                className="search-control text-white"
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p className="text-center">{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h2>Would you like to adopt {name}?</h2>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
