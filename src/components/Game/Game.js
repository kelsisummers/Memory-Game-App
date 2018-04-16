import React, { Component } from 'react';
import "./Game.css";
import Image  from "./Image.js";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, clicked: false, score: 0 };
    // this.handleClick = this.handleClick.bind(this);
	}
	
	// handleClick = (imageState) => {
	// 	if(imageState.clicked) {
	// 	// it has beeen clicked before so we reset game
	// 	} else {
	// 		// it has not been clicked, lets now increase score and stuff.
	// 	}    
  // };

  handleClick = () => {
		
		// We always use the setState method to update a component's state
		if (!this.state.clicked) {
			this.setState({ count: 1, clicked: true, score: this.state.score + 1 });
			// Image.images = Shuffle.Shuffle(Image.images);
		} else {
			this.setState({count: 0, clicked: false, score: 0})
		}
    
  };

	render() {

		return (
			<div className="container game-container">
				<div className="row">
					<div className="col center">
						<img className="logo" alt="logo" src="./img/logo.png" />
						<h4 className="instructions center-align">Click on an image to earn points, but don't click on it more than once!</h4>
					</div>
					<Image 
						count={this.state.count}
						clicked={this.state.clicked}
						handleClick={this.handleClick}
						score={this.state.score}
					/>
				</div>
			</div>
		);
	}
}

export default Game;
