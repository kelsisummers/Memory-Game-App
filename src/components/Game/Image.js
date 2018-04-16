import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop
// export function Shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }


const Image = props => {


  // const imageClick = () => {
	
  //   // We always use the setState method to update a component's state
  //     if (!this.state.clicked) {
  //       this.props.handleClick(this.state);
  //       this.setState({clicked: true}); // can set other things if needed
  //       // Image.images = Shuffle.Shuffle(Image.images);
        
  //     } else {
  //       //if it has been clicked just send state.
  //       this.props.handleClick(this.state);
  //     }
  // };

  let array = ["baby", "car", "flare", "gate", "hacker", "happytrio", "mud", "nedry", "shock", "sick", "sign", "trex"];

  let images = array.map((image, i) => {
    return <img onClick={props.handleClick} key={i} src={(`./img/${image}.jpg`)} alt="" className="hoverable z-depth-2" />
  });

  return (
    <div className="col">
      <h4>Count: {props.count} Clicked: {props.clicked.toString()} Score {props.score}</h4>

      { images }
    </div>  
  )
};

export default Image;