import React, { Component } from "react";



// console.log('these are our images imgs', imgs);

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop



class Image extends Component {

  imageClick = ({ id, clicked }) => {
    // We always use the setState method to update a component's state
      if (!this.props.clicked) {
        this.props.handleClick({ id, clicked });
        
      } else {
        //if it has been clicked just send state.
        this.props.handleClick({ id, clicked });
      }
  };

  render() {
    const { id, clicked, img } = this.props;
    return (
      <div className="col">
        {/* <h4>Count: {this.props.count} Score {this.props.score}</h4> */}
  
        <img onClick={e => this.imageClick({ id, clicked })} src={img} alt={"img"} className="hoverable z-depth-2" />
      </div>  
    )
  }
};

export default Image;