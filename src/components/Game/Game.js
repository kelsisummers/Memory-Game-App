import React, { Component } from 'react';
import "./Game.css";
import Image  from "./Image.js";
// import logo from "../../img/GameLogo.png"
import imgs from '../../img';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, clicked: false, score: 0, imgs };
	}

	shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
	
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
	
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
	
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
	
		return array;
	}
	
	handleClick = ({ id, clicked }) => {
		let imgs;
		if(clicked) {
		// it has beeen clicked before so we reset game
			console.log("This has been clicked before", clicked);
			imgs = this.state.imgs.map( img => { return {...img, clicked: false} })
		// HAVE NOT SET TO FALSE YET
		} else {
			console.log("Hasn't been clicked before");
			imgs = this.state.imgs.map(img => {
				if (img.id === id) {
					return { ...img, clicked: true }
				} else return img
			});
		}
		
		const score = imgs.reduce((acc, img) => {
			console.log("what is img", img);
			if (img.clicked) return acc + 1
			else return acc
		}, 0);

		this.setState({score, imgs: this.shuffle(imgs)});
  };

	render() {
		console.log("state", this.state);
		return (	
			<div className='grid'>
				<Navbar score={this.state.score}/>
				<div className="game-container">
					<div className="row">
						<div className="col center">
							{/* <img className="logo" alt="logo" src={logo} /> */}
							<h4 className="instructions center">Click on an image to earn points, but don't click it more than once!</h4>
						</div>
						</div>
						<div className='row'>
						{this.state.imgs.map((img, i) => {
							return (
						<Image
						img={img.img}
						clicked={img.clicked}
						key={img.id}
						id={img.id}
						handleClick={this.handleClick}
					/>
				)
						})}
						</div>

				</div>
				<Footer />
			</div>
		);
	}
}

export default Game;
