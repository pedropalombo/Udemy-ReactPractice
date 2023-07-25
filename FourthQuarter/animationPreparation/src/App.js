import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

class App extends Component {
  //state of the modal to be shown
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>

        <button className="Button" onClick={() => 
          this.setState(prevState => (
            {
              showBlock: !prevState.showBlock
              }
          ))
        }>
          Toggle
        </button>

        <br />


        {this.state.showBlock ? (
          <div 
            style={{
              backgroundColor: 'red',
              width: 100,
              height: 100,
              margin: 'auto'
            }}
          />
          
        ) : null}

        {/* setting props for modal status */}
        {/* OBS: only rendering modal if it'll be opened */}
        {this.state.modalIsOpen ? <Modal show={this.state.modalIsOpen} closed={this.closeModal} /> : null}
        {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} /> : null}

        {/* setting button animation */}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
