import React, { Component } from 'react';
import './styles.scss';
import { Props } from './types';

class BasketColorPreview extends Component<Props> {
  render() {
    const { attributes, pickedColor } = this.props;
    return (
      <section className='basket-color-picker'>
        <h3 className='basket-color-picker__name'>color:</h3>
        <div className='basket-color-picker__select-options'>
          <ul className='basket-color-picker__select-options__ul'>
            {attributes.map((item) => (
              <li
                style={{ backgroundColor: `${item}` }}
                className={`basket-color-picker__select-options__ul__color ${
                  pickedColor === item ? 'picked-color' : ''
                }`}
                key={item}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export { BasketColorPreview };
