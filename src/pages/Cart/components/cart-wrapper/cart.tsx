import { Component } from 'react';
import './styles.scss';
import { Nav } from '../../../../layouts/nav';
import { eraseTotalValue } from '../../../../store/features/basket/basket-slice';
import { EachItemDetails } from '../each-item-details';
import { CartSummary } from '../cart-summary';
import {
  eachUpdateInComponent,
  getCartSummary,
  getProductsWithPickedCurrency,
  getTotalQuantity,
} from './functions';
import { Props } from './types';
import { CheckoutModal } from '../checkout-modal';
import { HooksAccessComponent } from '../../../common/components/HooksAccessComponent';

class CartWrapper extends Component<Props> {
  componentDidMount() {
    if (this.props.basketSelector.isOpen === false) {
      document.body.style.overflowY = 'unset';
    }
    (async () => {
      const { basketSelector, dispatch, currency } = this.props;
      dispatch(eraseTotalValue());
      if (basketSelector.items.length < 1) return;
      getTotalQuantity(basketSelector.items, dispatch);

       getProductsWithPickedCurrency(basketSelector, currency).then((basket) => {
        getCartSummary(basket, dispatch);
      });
    })();
  }

  componentDidUpdate(prevProps) {
    (async () => {
      const { currency, basketSelector, dispatch } = this.props;
      await eachUpdateInComponent(
        prevProps,
        this.props,
        currency,
        basketSelector,
        dispatch,
      );
    })();
  }

  render() {
    const { basketSelector, currency, dispatch } = this.props;


    return (
      <>
        <CheckoutModal />
        <Nav />
        <section className='cart-wrapper'>
          <h2 className='cart-wrapper__title'>cart</h2>
          <EachItemDetails
            dispatch={dispatch}
            basketSelector={basketSelector}
            currency={currency}
          />
          <CartSummary
            basketSelector={basketSelector}
            currency={currency}
            dispatch={dispatch}
          />
        </section>
      </>
    );
  }
}

const CartPage = HooksAccessComponent(CartWrapper);
export { CartPage };
