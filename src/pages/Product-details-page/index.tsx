import { Component } from 'react';
import { Nav } from '../../layouts/nav';
import { AddCartButton } from './components/add-to-cart-button';
import { ColorPicker } from './components/color-picker';

class ProductDetailsPage extends Component {
  state = {
    attributes: ['crimson', 'blue', 'green', 'yellow'],
    gallery: [],
  };
  render() {
      const {attributes} = this.state
    return (
      <>
        <Nav />
        <section>
          this is page where we gonna show all details about product
          <AddCartButton />
          <ColorPicker attributes={attributes}/>
        </section>
      </>
    );
  }
}

export { ProductDetailsPage };
