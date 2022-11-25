import { Component } from 'react';
import { ReduxHOC } from '../../../common/components/ReduxHOC';
import { BasketColorPreview } from '../cart-color-preview';
import { BasketSizePreview } from '../cart-size-preview';
import './styles.scss';
import { PricePreview } from '../price-preview';
import { Nav } from '../../../../layouts/nav';
import { CartImgPreview } from '../cart-img-preview';
import {
  eraseTotalValue,
  setBasketPrice,
  setBasketQuantity,
  setBasketTax,
  updateBasket,
} from '../../../../store/features/basket/basket-slice';
import { PlusIcon } from '../../../../assets/svg/PlusIcon';
import { MinusIcon } from '../../../../assets/svg/MinusIcon';

class CartWrapper extends Component<any> {
  getCartSummary = (basket) => {
    const { dispatch } = this.props;
    if (basket) {
      const eachTotalQuantity = basket.map((item) => {
        return item.price * item.quantity;
      });
      const totalBasketSummary = eachTotalQuantity.reduce((a, b) => a + b, 0);
      dispatch(setBasketPrice(totalBasketSummary));
      this.getTax(totalBasketSummary);
    }
  };

  getTotalQuantity = (basket) => {
    if (basket) {
      const { dispatch } = this.props;
      const quantityArray = basket.map((item) => {
        return item.quantity;
      });
      const quantitySummary = quantityArray.reduce((a, b) => a + b, 0);
      dispatch(setBasketQuantity(quantitySummary));
    }
  };

  getTax = (cartSummary: number) => {
    const { dispatch } = this.props;
    dispatch(setBasketTax(Number(cartSummary * 0.21)));
  };

  getProductsWithPickedCurrency = async (basket, currency) => {
    if (basket.items.length < 1) return;
    return await basket.items.map((item) => {
      const newCurrency = item.allPrices.filter((item) =>
        item.currency.symbol === currency.value ? item.amount : item.price,
      );
      return { ...item, price: newCurrency[0].amount };
    });
  };

  removeItemFromCart = (i: number) => {
    const { basketSelector, dispatch } = this.props;
    const cartAfterDeletingItem = basketSelector.items.filter(
      (item, index) => index !== i,
    );
    dispatch(updateBasket(cartAfterDeletingItem));
    this.getCartSummary(cartAfterDeletingItem);
    this.getTotalQuantity(cartAfterDeletingItem);
  };

  handleQuantity = (i: number, sign: string) => {
    const { basketSelector, dispatch } = this.props;
    const updatedItemsInCart = [];
    basketSelector.items.filter((item, index) => {
      if (index === i) {
        const quantityToUpdate = item.quantity;
        if (sign === '+') {
          updatedItemsInCart.push({ ...item, quantity: quantityToUpdate + 1 });
        } else if (sign === '-') {
          updatedItemsInCart.push({ ...item, quantity: quantityToUpdate - 1 });
        }
      } else if (index !== i) {
        updatedItemsInCart.push(item);
      }
      this.getTotalQuantity(updatedItemsInCart);
      dispatch(updateBasket(updatedItemsInCart));
    });
  };

  componentDidMount() {
    (async () => {
      const { basketSelector, dispatch, currency } = this.props;
      dispatch(eraseTotalValue());
      if (basketSelector.items.length < 1) return;
      this.getTotalQuantity(basketSelector.items);

      this.getProductsWithPickedCurrency(basketSelector, currency).then(
        (basket) => {
          this.getCartSummary(basket);
        },
      );
    })();
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>) {
    (async () => {
      const { basketSelector, currency } = this.props;
      if (prevProps.currency !== this.props.currency) {
        await this.getProductsWithPickedCurrency(basketSelector, currency).then(
          (basket) => this.getCartSummary(basket),
        );
      }
      if (
        prevProps.basketSelector.quantity !== this.props.basketSelector.quantity
      ) {
        this.getCartSummary(basketSelector.items);
      }
    })();
  }

  render() {
    const { basketSelector, currency } = this.props;
    const { isOpen, quantity } = basketSelector;
    return (
      <>
        {isOpen && ( <>
        <Nav/>
          <section className={`${isOpen ? 'cart-wrapper-mini' : 'cart-wrapper'}`}>
        {isOpen ? (
          <h2 className='cart-wrapper-mini__title--mini'>
            My Bag,
          <span className='cart-wrapper-mini__title--mini__span'>{quantity} items</span>
          </h2>
          ) : (
          <h2 className='cart-wrapper__title'>cart</h2>
          )}

        {basketSelector.items.map((item, index) => (
          <div
          key={index}
          className='cart-wrapper__product-wrapper'
          >
          <section className='cart-wrapper__product-wrapper__left-column'>
          <h3 className='cart-wrapper__product-wrapper__left-column__brand'>
        {item.brand}
          </h3>
          <h3 className='cart-wrapper__product-wrapper__left-column__name'>
        {item.name}
          </h3>
          <PricePreview
          currency={currency}
          allPrices={item.allPrices}
          />
        {item.allColors.length > 1 && (
          <BasketColorPreview
          pickedColor={item.color}
          attributes={item.allColors}
          />
          )}
        {item.allSizes.length > 1 && (
          <BasketSizePreview
          attributes={item.allSizes}
          pickedSize={item.size}
          />
          )}
          </section>
          <section className='cart-wrapper__product-wrapper__right-column'>
          <section className='cart-wrapper__product-wrapper__right-column__quantity'>
          <button
          className='cart-wrapper__product-wrapper__right-column__quantity__button'
          onClick={() => this.handleQuantity(index, '+')}
          >
          <PlusIcon />
          </button>
          <p className='cart-wrapper__product-wrapper__right-column__quantity__value'>
        {item.quantity}
          </p>
        {item.quantity < 2 ? (
          <button
          className='cart-wrapper__product-wrapper__right-column__quantity__button'
          onClick={() => this.removeItemFromCart(index)}
          >
          <MinusIcon />
          </button>
          ) : (
          <button
          className='cart-wrapper__product-wrapper__right-column__quantity__button'
          onClick={() => this.handleQuantity(index, '-')}
          >
          <MinusIcon />
          </button>
          )}
          </section>
          <CartImgPreview gallery={item.gallery} />
          </section>
          </div>
          ))}
          <section className='cart-wrapper__summary'>
            {!isOpen && <>
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
            </>
            }
          <p className='cart-wrapper__summary__description'>
          Total:
          <span className='cart-wrapper__summary__description__span'>
        {currency.value}
        {basketSelector.totalPrice.toFixed(2)}
          </span>
          </p>
          <button className='cart-wrapper__summary__description__order-btn'>
          order
          </button>
          </section>
          </section>
        </>  )}
      </>
    );
  }
}

const CartPage = ReduxHOC(CartWrapper);
export { CartPage };
