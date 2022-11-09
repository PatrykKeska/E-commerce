import { Component } from 'react';
import { Nav } from '../../layouts/nav';
import { AddCartButton } from './components/add-to-cart-button';
import { ColorPickerComponent } from './components/color-picker';
import { SizePickerComponent } from './components/size-picker';
import { ProductPriceComponent } from './components/product-price';
import { ProductImage } from './components/product-image';
import { ProductDescription } from './components/product-description/product-description';
import './styles.scss';
import {ProductName} from './components/product-name';
class ProductDetailsPage extends Component {
  state = {
    name: 'PlayStation 5',
    colors: ['crimson', 'blue', 'green', 'yellow'],
    sizes: ['s', 'm', 'l', 'xl'],
    gallery: [
      'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg',
    ],
    description:
      'A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha',
  };
  render() {
    const { colors, sizes, gallery, description, name } = this.state;
    return (
      <>
        <Nav />
        <section className="product-details-main-wrapper">
          <section className="product-details-main-wrapper__left-column">
            <ProductImage
              name={name}
              attributes={gallery}
            />
          </section>
          <section className="product-details-main-wrapper__right-column">
            <ProductName name={name}/>
            <SizePickerComponent attributes={sizes} />
            <ColorPickerComponent attributes={colors} />
            <ProductPriceComponent />
            <AddCartButton />
            <ProductDescription attributes={description} />
          </section>
        </section>
      </>
    );
  }
}

export { ProductDetailsPage };
