import React, { Component } from 'react';
import { ReduxHOC } from '../../../common/components/ReduxHOC';
import './styles.scss';
import { Props } from './types';
import { getProductPrice } from '../../../../Api/getProductDetails';
import { setProductPrice } from '../../../../store/features/product-details/product-details-slice';
class ProductPrice extends Component<Props> {
  Capitalize(prices: number) {
    return prices.toString().slice(1, prices.toString().length);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>) {
    (async () => {
      const { price, currency, dispatch, selector } = this.props;
      if (prevProps !== this.props) {
        const values = await getProductPrice(price, currency.value);
        if (typeof values !== 'undefined') {
          dispatch(setProductPrice(values.amount));
        }
        console.log(selector);
      }
    })();
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(setProductPrice(0));
  }

  render() {
    const { selector, currency } = this.props;
    return (
      <section className="product-price">
        <h3 className="product-price__name">price:</h3>
        <p className="product-price__currency">
          <span className="product-price__currency__span-symbol">
            {currency.value}
          </span>
          <span className="product-price__currency__span-first">
            {selector.price.toString()[0]}
          </span>
          <span className="product__currency__span-rest">
            {this.Capitalize(selector.price)}
          </span>
        </p>
      </section>
    );
  }
}

const ProductPriceComponent = ReduxHOC(ProductPrice);
export { ProductPriceComponent };
