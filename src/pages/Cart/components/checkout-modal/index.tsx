import { Component } from 'react';
import { Props } from './types';
import './styles.scss';
import {
  handleCheckout,
  placeAnOrder,
} from '../../../../store/features/basket/basket-slice';
import { HooksAccessComponent } from '../../../common/components/HooksAccessComponent';
class CheckoutModalC extends Component<Props> {
  confirmOrder = () => {
    const { dispatch } = this.props;
    dispatch(placeAnOrder());
    dispatch(handleCheckout(false));
  };
  cancelOrder = () => {
    const { dispatch } = this.props;
    dispatch(handleCheckout(false));
  };
  render() {
    const { basketSelector, currency } = this.props;
    const { tax, quantity, totalPrice, checkout } = basketSelector;
    return (
      <>
        {checkout ? (
          <section className='checkout-modal-wrapper'>
            <div className='checkout-modal-wrapper__container'>
              <h2>your summary:</h2>
              <h4 className='checkout-modal-wrapper__container__title'>
                total price:{' '}
                <span className='checkout-modal-wrapper__container__title__span'>
                  {totalPrice.toFixed(2)} {currency.value}
                </span>
              </h4>
              <h4 className='checkout-modal-wrapper__container__title'>
                for the number of products:{' '}
                <span className='checkout-modal-wrapper__container__title__span'>
                  {quantity}{' '}
                </span>
              </h4>
              <h4 className='checkout-modal-wrapper__container__title'>
                included tax:{' '}
                <span className='checkout-modal-wrapper__container__title__span'>
                  {tax.toFixed(2)} {currency.value}
                </span>
              </h4>
              <h2>Do you want to confirm an order ?</h2>
              <section className='checkout-modal-wrapper__container__btn-section'>
                <button
                  onClick={this.confirmOrder}
                  className='checkout-modal-wrapper__container__btn-section__btn'
                >
                  yes
                </button>
                <button
                  onClick={this.cancelOrder}
                  className='checkout-modal-wrapper__container__btn-section__btn'
                >
                  no
                </button>
              </section>
            </div>
          </section>
        ) : null}
      </>
    );
  }
}

const CheckoutModal = HooksAccessComponent(CheckoutModalC);
export { CheckoutModal };
