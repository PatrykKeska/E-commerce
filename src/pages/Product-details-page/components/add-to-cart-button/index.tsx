import { Component } from 'react';
import './styles.scss';
class AddCartButton extends Component {
  state = {
    isHover : false
  }
  handleMouseEnter = ()=> {
    this.setState({
      isHover: true
    })
  }

  handleMouseLeave = ()=> {
    this.setState({
      isHover: false
    })
  }
  render() {
    const {isHover} = this.state
    return (
      <>
        <button onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className={`add-to-cart-btn ${isHover ? 'active-btn' : ''} `}>add to cart</button>
      </>
    );
  }
}

export { AddCartButton };
