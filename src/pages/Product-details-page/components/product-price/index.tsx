import React, { Component } from 'react';
import { ReduxHOC } from '../../../common/components/ReduxHOC';
import './styles.scss';
class ProductPrice extends Component {
  Capitalize(prices: number) {
    return prices.toString().slice(1, prices.toString().length);
  }
  render() {
    const currency = '$';
    const prices = 144.5;
    return (
      <section className="product-price">
        <h3 className="product-price__name">price:</h3>
        <p className="product-price__currency">
          <span className="product-price__currency__span-symbol">
            {currency}
          </span>
          <span className="product-price__currency__span-first">
            {prices.toString()[0]}
          </span>
          <span className="product__currency__span-rest">
            {this.Capitalize(prices)}
          </span>
        </p>
      </section>
    );
  }
}

const ProductPriceComponent = ReduxHOC(ProductPrice);
export { ProductPriceComponent };
