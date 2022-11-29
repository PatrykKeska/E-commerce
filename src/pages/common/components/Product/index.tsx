import { Component } from 'react';
import './styles.scss';
import { ProductProps, State } from './types/types';
import clsx from 'clsx';
import { ProductShopCartButton } from '../Product-shop-cart-button';
import { HooksAccessComponent } from '../HooksAccessComponent';

class ProductC extends Component<ProductProps, State> {
  state: State = {
    isActive: false,
    attribute: false,
  };

  Capitalize(prices: number) {
    return prices.toString().slice(1, prices.toString().length);
  }
  handleActive = (enter: boolean) => {
    if (enter) {
      this.setState({
        isActive: true,
      });
    } else {
      this.setState({
        isActive: false,
      });
    }
  };

  handleRedirect = () => {
    const { navigate, id } = this.props;
    navigate(`${id}`);
  };

  componentDidMount() {
    const { attributes } = this.props;
    if (!attributes) {
      this.setState({
        attribute: false,
      });
    } else if (attributes.length === 0) {
      this.setState({
        attribute: false,
      });
    } else {
      this.setState({
        attribute: true,
      });
    }
  }

  render() {
    const { name, id, currency, prices, inStock, gallery, category } =
      this.props;
    const { isActive, attribute } = this.state;
    return (
      <section
        onClick={this.handleRedirect}
        onMouseEnter={() => this.handleActive(true)}
        onMouseLeave={() => this.handleActive(false)}
        className={clsx(
          'product',
          !inStock && 'product--out-of-stock',
          isActive && 'product-is-active',
        )}
      >
        {!inStock && <p className='product__out-of-stock'>Out of Stock</p>}
        <img
          className='product__img'
          src={gallery[0]}
          alt={`this is product: ${name}`}
        />
        <h3 className='product__title'>{name}</h3>
        <p className='product__currency'>
          <span className='product__currency__span-symbol'>
            {currency.value}
          </span>
          <span className='product__currency__span-first'>
            {prices.toString()[0]}
          </span>
          <span className='product__currency__span-rest'>
            {this.Capitalize(prices)}
          </span>
        </p>
        {isActive && !attribute && inStock && (
          <ProductShopCartButton
            onClick={this.handleRedirect}
            className='product__basket-button'
            productID={id}
            category={category}
          />
        )}
      </section>
    );
  }
}
const Product = HooksAccessComponent(ProductC);
export { Product };
