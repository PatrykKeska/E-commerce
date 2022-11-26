import React, { Component } from 'react';
import { Props } from './types';
import './styles.scss';
class BasketSizePreview extends Component<Props> {
  render() {
    const { pickedSize, attributes } = this.props;
    return (
      <section className='cart-size-preview'>
        <h3 className='cart-size-preview__title'>Size:</h3>
        <ul className='cart-size-preview__wrapper'>
          {attributes.map((item) => (
            <li
              className={`cart-size-preview__wrapper__size ${
                pickedSize === item ? 'picked-size' : ''
              }`}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export { BasketSizePreview };
