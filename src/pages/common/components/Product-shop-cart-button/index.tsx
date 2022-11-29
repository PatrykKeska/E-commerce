import { Component } from 'react';
import { Props } from './types/types';
import { GreenBasket } from '../../../../assets/svg/GreenBasket';
import './styles.scss';
import {
  getProductDetails,
  getProductPrice,
} from '../../../../Api/getProductDetails';
import {
  addProductToBasket,
  updateBasket,
} from '../../../../store/features/basket/basket-slice';
import {
  setBrandName,
  setProductAllPrices,
  setProductGallery,
  setProductId,
  setProductName,
  setProductPrice,
  setProductStock,
} from '../../../../store/features/product-details/product-details-slice';
import { HooksAccessComponent } from '../HooksAccessComponent';
export class ProductShopCartButtonC extends Component<Props> {
  state = {
    productDetails: {},
  };
  componentDidMount() {
    (async () => {
      const { productID, dispatch, currency } = this.props;
      const response = await getProductDetails(productID);
      const values = await getProductPrice(
        response.data.product.prices,
        currency.value,
      );
      if (typeof values !== 'undefined') {
        dispatch(setProductPrice(values.amount));
      }

      this.setState({ productDetails: response.data.product });
      dispatch(setProductId(productID));
      dispatch(setProductStock(response.data.product.inStock));
      dispatch(setProductGallery(response.data.product.gallery));
      dispatch(setProductName(response.data.product.name));
      dispatch(setBrandName(response.data.product.brand));
      dispatch(setProductAllPrices(response.data.product.prices));
    })();
  }
  addProductToBasket = () => {
    const { basketSelector, dispatch, selector } = this.props;
    const isItemExistInCart = basketSelector.items.find(
      (item) => item.name === selector.name,
    );
    const exceptItemWithNoAttr = basketSelector.items.filter(
      (item) => item.name !== selector.name,
    );
    if (basketSelector.items.length === 0) {
      dispatch(addProductToBasket(selector));
    } else if (!isItemExistInCart) {
      dispatch(addProductToBasket(selector));
    } else if (isItemExistInCart) {
      dispatch(
        updateBasket([
          ...exceptItemWithNoAttr,
          {
            ...isItemExistInCart,
            quantity: isItemExistInCart.quantity + 1,
          },
        ]),
      );
    }
  };

  render() {
    const { className } = this.props;
    return (
      <button
        className={className}
        onClick={this.addProductToBasket}
      >
        <GreenBasket />
      </button>
    );
  }
}

const ProductShopCartButton = HooksAccessComponent(ProductShopCartButtonC);
export { ProductShopCartButton };
