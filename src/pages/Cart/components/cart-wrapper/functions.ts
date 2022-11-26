import {
  handleCartState,
  setBasketPrice,
  setBasketQuantity,
  setBasketTax,
  updateBasket,
} from '../../../../store/features/basket/basket-slice';
import { Dispatch } from 'redux';

const getCartSummary = (basket, dispatch: Dispatch) => {
  const getTax = (cartSummary: number) => {
    dispatch(setBasketTax(Number(cartSummary * 0.21)));
  };

  if (basket) {
    const eachTotalQuantity = basket.map((item) => {
      return item.price * item.quantity;
    });
    const totalBasketSummary = eachTotalQuantity.reduce((a, b) => a + b, 0);
    dispatch(setBasketPrice(totalBasketSummary));
    getTax(totalBasketSummary);
  }
};

const getTotalQuantity = (basket, dispatch: Dispatch) => {
  if (basket) {
    const quantityArray = basket.map((item) => {
      return item.quantity;
    });
    const quantitySummary = quantityArray.reduce((a, b) => a + b, 0);
    dispatch(setBasketQuantity(quantitySummary));
  }
};

const getTax = (cartSummary: number, dispatch) => {
  dispatch(setBasketTax(Number(cartSummary * 0.21)));
};

const getProductsWithPickedCurrency = async (basket, currency) => {
  if (basket.items.length < 1) return;
  return await basket.items.map((item) => {
    const newCurrency = item.allPrices.filter((item) =>
      item.currency.symbol === currency.value ? item.amount : item.price,
    );
    return { ...item, price: newCurrency[0].amount };
  });
};

const removeItemFromCart = (i: number, basketSelector, dispatch) => {
  const cartAfterDeletingItem = basketSelector.items.filter(
    (item, index) => index !== i,
  );
  dispatch(updateBasket(cartAfterDeletingItem));
  getCartSummary(cartAfterDeletingItem, dispatch);
  getTotalQuantity(cartAfterDeletingItem, dispatch);
};

const handleQuantity = (i: number, sign: string, basketSelector, dispatch) => {
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
    getTotalQuantity(updatedItemsInCart, dispatch);
    dispatch(updateBasket(updatedItemsInCart));
  });
};

const handleRedirectToCart = (dispatch) => {
  dispatch(handleCartState(false));
};

const eachUpdateInComponent = async (prevProps,props, currency, basketSelector, dispatch)=> {
    if (prevProps.currency !== props.currency) {
      await getProductsWithPickedCurrency(basketSelector, currency).then(
          (basket) => getCartSummary(basket, dispatch),
      );
    }
    if (
        prevProps.basketSelector.quantity !== props.basketSelector.quantity
    ) {
      getCartSummary(basketSelector.items, dispatch);
    }
}

export {
  getCartSummary,
  getTax,
  getTotalQuantity,
  removeItemFromCart,
  getProductsWithPickedCurrency,
  handleQuantity,
  handleRedirectToCart,
  eachUpdateInComponent
};
