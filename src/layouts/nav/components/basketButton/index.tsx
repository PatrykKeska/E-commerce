import { Component } from 'react';
import { BasketIcon } from '../../../../assets/svg/BasketIcon';
import './style.scss';
class BasketButton extends Component {
  render() {
    return (
      <button className="button">
         <BasketIcon />
      </button>
    );
  }
}

export { BasketButton };
