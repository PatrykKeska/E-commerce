import React, { Component } from 'react';
import './styles.scss';
import { Props } from './types';
import { getProductPrice } from '../../../../Api/getProductDetails';
import { setProductPrice } from '../../../../store/features/product-details/product-details-slice';
import { HooksAccessComponent } from '../../../common/components/HooksAccessComponent';
class ProductPrice extends Component<Props> {
  Capitalize(prices: number) {
    return prices.toString().slice(1, prices.toString().length);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    (async () => {
      const { price, currency, dispatch } = this.props;
      if (prevProps !== this.props) {
        const values = await getProductPrice(price, currency.value);
        if (typeof values !== 'undefined') {
          dispatch(setProductPrice(values.amount));
        }
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
      <section className='product-price'>
        <h3 className='product-price__name'>price:</h3>
        <p className='product-price__currency'>
          <span className='product-price__currency__span-symbol'>
            {currency.value}
          </span>
          <span className='product-price__currency__span-first'>
            {selector.price.toString()[0]}
          </span>
          <span className='product__currency__span-rest'>
            {this.Capitalize(selector.price)}
          </span>
        </p>
      </section>
    );
  }
}

const ProductPriceComponent = HooksAccessComponent(ProductPrice);
export { ProductPriceComponent };
