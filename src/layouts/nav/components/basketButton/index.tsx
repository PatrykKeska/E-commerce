import { Component } from 'react';
import { BasketIcon } from '../../../../assets/svg/BasketIcon';
import './style.scss';
import { ReduxHOC } from '../../../../pages/common/components/ReduxHOC';
import { Props } from './types';
import { handleCartState } from '../../../../store/features/basket/basket-slice';
class BasketButtonC extends Component<Props> {
  handleCart = (state: boolean) => {
    const { dispatch } = this.props;
    dispatch(handleCartState(state));
  };
  render() {
    const { basketSelector } = this.props;
    const { quantity } = basketSelector;
    return (
      <button onClick={() => this.handleCart(true)}  className='button'>
        <BasketIcon />
        {quantity > 0 && (
          <span className='button__items-in-cart'>{quantity}</span>
        )}
      </button>
    );
  }
}

const BasketButton = ReduxHOC(BasketButtonC);
export { BasketButton };
