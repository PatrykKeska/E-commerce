import { Component } from 'react';
import { ReduxHOC } from '../../../common/components/ReduxHOC';
import './styles.scss';
import {
  eraseTotalValue,
} from '../../../../store/features/basket/basket-slice';
import { NavLink } from 'react-router-dom';
import {
  eachUpdateInComponent,
  getCartSummary,
  getProductsWithPickedCurrency,
  getTotalQuantity,
  handleRedirectToCart
} from './functions';
import {Props} from './types';
import {EachItemDetails} from '../each-item-details';

class MiniCartWrapper extends Component<Props> {
  componentDidMount() {
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
    (async ()=>{
      const {currency, basketSelector, dispatch} = this.props
      await eachUpdateInComponent(prevProps, this.props, currency, basketSelector, dispatch)
    })()}

  render() {
    const { basketSelector, currency, dispatch } = this.props;
    const { quantity, isOpen } = basketSelector;

    return (
      <>
        {isOpen && (
          <>
            <section className='cart-wrapper-mini'>
              <h2 className='cart-wrapper-mini__title--mini'>
                My Bag,
                <span className='cart-wrapper-mini__title--mini__span'>
                  {quantity} {quantity > 1 ? 'items' : 'item'}
                </span>
              </h2>

              <EachItemDetails
                  dispatch={dispatch}
                  basketSelector={basketSelector}
                  currency={currency}
              />
              <section className='cart-wrapper__summary'>
                <p className='cart-wrapper__summary__description'>
                  Total:
                  <span className='cart-wrapper__summary__description__span'>
                    {currency.value}
                    {basketSelector.totalPrice.toFixed(2)}
                  </span>
                </p>
                <div className='cart-wrapper__summary__description__btn-wrapper'>
                  <NavLink
                    onClick={()=>handleRedirectToCart(dispatch)}
                    to='/cart'
                    className='cart-wrapper__summary__description__btn-wrapper__btn __btn--view'
                  >
                    view bag
                  </NavLink>
                  <button className='cart-wrapper__summary__description__btn-wrapper__btn'>
                    checkout
                  </button>
                </div>
              </section>
            </section>
          </>
        )}
      </>
    );
  }
}

const MiniCart = ReduxHOC(MiniCartWrapper);
export { MiniCart };
