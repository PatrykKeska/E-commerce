import { Component } from 'react';
import { Nav } from '../../layouts/nav';
import { AddCartButton } from './components/add-to-cart-button';
import {ColorPickerComponent} from './components/color-picker';
import {SizePickerComponent} from './components/size-picker';
import {ProductPriceComponent} from './components/product-price';

class ProductDetailsPage extends Component {
  state = {
    attributes: ['crimson', 'blue', 'green', 'yellow'],
      sizes: ['s', 'm', 'l', 'xl'],
    gallery: [],
  };
  render() {
      const {attributes,sizes} = this.state
    return (
      <>
        <Nav />
        <section>
          this is page where we gonna show all details about product
          <AddCartButton />
          <ColorPickerComponent attributes={attributes}/>
            <SizePickerComponent sizes={sizes}/>
            <ProductPriceComponent />
        </section>
      </>
    );
  }
}

export { ProductDetailsPage };
