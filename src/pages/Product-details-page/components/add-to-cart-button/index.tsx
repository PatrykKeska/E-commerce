import { Component } from 'react';
import './styles.scss';
import { ReduxHOC } from '../../../common/components/ReduxHOC';
import { addProductToBasket } from '../../../../store/features/basket/basket-slice';
import {
  openModal,
  setMessage,
  setTitle,
} from '../../../../store/features/modal/modal-slice';
import { Props } from './types';
class CartButton extends Component<Props> {
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
    const { selector, dispatch } = this.props;
    if (selector.allColors.length > 0 && selector.color === '') {
      dispatch(openModal());
      dispatch(setTitle('Fail'));
      dispatch(setMessage('Please Select Color'));
      throw new Error('Please Select Color');
    }
    if (selector.allSizes.length > 0 && selector.size === '') {
      dispatch(openModal());
      dispatch(setTitle('Fail'));
      dispatch(setMessage('Please Select Size'));
      throw new Error('Please Select Size');
    } else {
      dispatch(addProductToBasket(selector));
      dispatch(openModal());
      dispatch(setTitle('Success'));
      dispatch(setMessage('Product added to Cart!'));
    }
  };
  render() {
    const { isHover } = this.state;
    const { selector } = this.props;
    return (
      <>
        <button
          disabled={!selector.inStock}
          onClick={this.handleState}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          className={`add-to-cart-btn ${isHover ? 'active-btn' : ''}  ${
            !selector.inStock ? 'btn-disabled' : ''
          }`}
        >
          {selector.inStock ? 'add to Cart' : 'out of stock'}
        </button>
      </>
    );
  }
}
const AddCartButton = ReduxHOC(CartButton);
export { AddCartButton };
