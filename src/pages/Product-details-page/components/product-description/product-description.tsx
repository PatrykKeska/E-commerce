import { Component } from 'react';
import { Props } from './types';
import './styles.scss';
import { Interweave } from 'interweave';
class ProductDescription extends Component<Props> {
  render() {
    const { attributes } = this.props;
    return (
      <section className='product-description-wrapper'>
        <Interweave
          className='product-description-wrapper__text'
          content={attributes}
        />
      </section>
    );
  }
}

export { ProductDescription };
