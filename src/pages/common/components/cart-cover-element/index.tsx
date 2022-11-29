import { Component } from 'react';
import './styles.scss';
import { Props } from './types';
import { handleCartState } from '../../../../store/features/basket/basket-slice';
import { HooksAccessComponent } from '../HooksAccessComponent';

class CartCoverElementC extends Component<Props> {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(handleCartState(false));
  };
  componentDidUpdate() {
    if (this.props.basketSelector.isOpen === true) {
      document.body.style.overflowY = 'hidden';
    }
    if (this.props.basketSelector.isOpen === false) {
      document.body.style.overflowY = 'unset';
    }
  }

  render() {
    const { basketSelector } = this.props;
    const { isOpen } = basketSelector;

    return (
      <>
        {isOpen ? (
          <div
            key={String(isOpen)}
            style={{ display: `${isOpen ? 'block' : 'none'}` }}
            onClick={this.handleClick}
            className='cart-cover-element'
          />
        ) : null}
      </>
    );
  }
}

const CartCoverElement = HooksAccessComponent(CartCoverElementC);
export { CartCoverElement };
