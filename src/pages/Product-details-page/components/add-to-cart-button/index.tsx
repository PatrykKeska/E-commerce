import { Component } from 'react';
import './styles.scss';
import { ReduxHOC } from '../../../common/components/ReduxHOC';
import {
  addProductToBasket,
  updateBasket,
} from '../../../../store/features/basket/basket-slice';
import {
  openModal,
  setMessage,
  setTitle,
} from '../../../../store/features/modal/modal-slice';
import { Props } from './types';

import { clearDetails } from '../../../../store/features/product-details/product-details-slice';
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


  handleAddingProduct = () => {
    const { selector, dispatch, basketSelector } = this.props;
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
      if (basketSelector.items.length === 0) {
        dispatch(addProductToBasket({ ...selector }));
      } else {
        const sameSize = basketSelector.items.find(
          (item) => item.name === selector.name && item.size === selector.size,
        );

        const sameColorAndSize = basketSelector.items.find(
          (item) =>
            item.name === selector.name &&
            item.color === selector.color &&
            item.size === selector.size,
        );
        const sameColorNotSize = basketSelector.items.find(
          (item) =>
            item.name === selector.name &&
            item.color === selector.color &&
            item.size !== selector.size,
        );
        const sameSizeNotColor = basketSelector.items.find(
          (item) =>
            item.name === selector.name &&
            item.size === selector.size &&
            item.color !== selector.color,
        );
        const exceptSameSize = basketSelector.items.filter(
          (item) => item.size !== selector.size,
        );
        const exceptItemWithNoAttr = basketSelector.items.filter(
          (item) => item.name !== selector.name,
        );
        const sameItemDifferentAttr = basketSelector.items.filter((item) => {
          if (
            (item.size === selector.size && item.color !== selector.color) ||
            (item.size !== selector.size && item.color === selector.color) ||
            (item.size !== selector.size && item.color !== selector.color)
          ) {
            return item;
          }
        });
        const isItemExistInCart = basketSelector.items.find(
          (item) => item.name === selector.name,
        );
        if (!isItemExistInCart) {
          dispatch(addProductToBasket(selector));
        } else if (
          selector.color !== '' &&
          selector.size !== '' &&
          sameColorAndSize
        ) {
          dispatch(
            updateBasket([
              ...sameItemDifferentAttr,
              { ...sameColorAndSize, quantity: sameColorAndSize.quantity + 1 },
            ]),
          );
        } else if (
          selector.color !== '' &&
          selector.size !== '' &&
          sameSizeNotColor
        ) {
          dispatch(updateBasket([...basketSelector.items, { ...selector }]));
        } else if (
          selector.color !== '' &&
          selector.size !== '' &&
          sameColorNotSize
        ) {
          dispatch(updateBasket([...basketSelector.items, { ...selector }]));
        } else if (selector.color === '' && selector.size !== '' && sameSize) {
          const updatedCart = [
            ...exceptSameSize,
            { ...sameSize, quantity: sameSize.quantity + 1 },
          ];
          dispatch(updateBasket(updatedCart));
        } else if (!sameSize) {
          dispatch(updateBasket([...basketSelector.items, { ...selector }]));
        } else if (selector.color === '' && selector.size === '' && isItemExistInCart) {
          dispatch(
            updateBasket([
              ...exceptItemWithNoAttr,
              { ...isItemExistInCart, quantity: isItemExistInCart.quantity + 1 },
            ]),
          );
        }
      }

      dispatch(openModal());
      dispatch(setTitle('Success'));
      dispatch(setMessage('Product added to Cart!'));
      dispatch(clearDetails());
    }
  };

  render() {
    const { isHover } = this.state;
    const { selector } = this.props;
    return (
      <>
        <button
          disabled={!selector.inStock}
          onClick={this.handleAddingProduct}
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
