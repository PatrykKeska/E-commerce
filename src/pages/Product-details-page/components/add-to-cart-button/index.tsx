import { Component } from 'react';
import './styles.scss';
import { ReduxHOC } from '../../../common/components/ReduxHOC';
import { addProductToBasket } from '../../../../store/features/basket/basket-slice';
class CartButton extends Component<any> {
  state = {
    isHover: false,
  };
  handleMouseEnter = () => {
    this.setState({
      isHover: true,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      isHover: false,
    });
  };

  handleState = () => {
    const { selector, dispatch, basketSelector } = this.props;
    dispatch(addProductToBasket(selector));
    console.log(selector, basketSelector);
  };
  render() {
    const { isHover } = this.state;
    return (
      <>
        <button
          onClick={this.handleState}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          className={`add-to-cart-btn ${isHover ? 'active-btn' : ''} `}
        >
          add to cart
        </button>
      </>
    );
  }
}
const AddCartButton = ReduxHOC(CartButton);
export { AddCartButton };
