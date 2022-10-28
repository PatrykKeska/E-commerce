import { Component } from 'react';
import './style.scss';
import { ArrowIcon } from '../../../../assets/svg/ArrowIcon';

class CurrencyButton extends Component {
  render() {
    return (
      <button className="button">
        $<ArrowIcon />
      </button>
    );
  }
}

export { CurrencyButton };
