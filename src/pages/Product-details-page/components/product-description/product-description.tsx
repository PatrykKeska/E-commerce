import { Component } from 'react';
import { Props } from './types';
import './styles.scss';
class ProductDescription extends Component<Props> {
  render() {
    const { attributes } = this.props;
    return (
      <section className="product-description-wrapper">
        <p className="product-description-wrapper__text">{attributes}</p>
      </section>
    );
  }
}

export { ProductDescription };
