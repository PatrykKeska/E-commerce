import { Component } from 'react';
import { Nav } from '../../layouts/nav';
import { AddCartButton } from './components/add-to-cart-button';
import { ColorPicker } from './components/color-picker';

class ProductDetailsPage extends Component {
  state = {
    attributes: [],
    gallery: [],
  };
  render() {
    return (
      <>
        <Nav />
        <section>
          this is page where we gonna show all details about product
          <AddCartButton />
          <ColorPicker />
        </section>
      </>
    );
  }
}

export { ProductDetailsPage };
