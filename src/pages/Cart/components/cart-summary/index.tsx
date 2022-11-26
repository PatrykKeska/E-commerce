import { Component } from 'react';
import { Props } from './types';

class CartSummary extends Component<Props> {
  render() {
    const { basketSelector, currency } = this.props;
    return (
      <>
        <section className='cart-wrapper__summary'>
          <p className='cart-wrapper__summary__description'>
            Tax 21%:
            <span className='cart-wrapper__summary__description__span'>
              {currency.value}
              {basketSelector.tax.toFixed(2)}
            </span>
          </p>
          <p className='cart-wrapper__summary__description'>
            Quantity:
            <span className='cart-wrapper__summary__description__span'>
              {basketSelector.quantity}
            </span>
          </p>

          <p className='cart-wrapper__summary__description'>
            Total:
            <span className='cart-wrapper__summary__description__span'>
              {currency.value}
              {basketSelector.totalPrice.toFixed(2)}
            </span>
          </p>
          <div className='cart-wrapper__summary__description__btn-wrapper'>
            <button className='cart-wrapper__summary__description__btn-wrapper__btn'>
              order
            </button>
          </div>
        </section>
      </>
    );
  }
}

export { CartSummary };
