import { Component } from 'react';
import { BasketIcon } from '../../../../assets/svg/BasketIcon';
import './style.scss';
import { Props } from './types';
import { handleCartState } from '../../../../store/features/basket/basket-slice';
import { HooksAccessComponent } from '../../../../pages/common/components/HooksAccessComponent';
class BasketButtonC extends Component<Props> {
  handleCart = () => {
    const { dispatch, basketSelector } = this.props;
    if (!basketSelector.isOpen) {
      dispatch(handleCartState(true));
    }
  };

  render() {
    const { basketSelector } = this.props;
    const { quantity } = basketSelector;
    return (
      <button
        onClick={this.handleCart}
        className='button'
      >
        <BasketIcon />
        {quantity > 0 && (
          <span className='button__items-in-cart'>{quantity}</span>
        )}
      </button>
    );
  }
}

const BasketButton = HooksAccessComponent(BasketButtonC);
export { BasketButton };
