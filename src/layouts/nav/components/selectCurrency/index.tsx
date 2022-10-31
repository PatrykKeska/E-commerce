import { Component } from 'react';
import './style.scss';
import { State } from './types/types';
import { ArrowIcon } from '../../../../assets/svg/ArrowIcon';
import {getCurrency} from './Api/getCurrency';
class SelectCurrency extends Component<{}, State> {
  state: State = {
    isOpen: false,
    selectValue: '$',
    availableCurrencies: [],
  };

  handleClick = () => {
    this.setState((prev: State) => ({ isOpen: !prev.isOpen }));
  };
  handlePickCurrency = (symbol: string) => {
    this.setState({ selectValue: symbol, isOpen: false });
  };
  componentDidMount() {
    (async () => {
      const result = await getCurrency()
      this.setState({ availableCurrencies: result.data.currencies });
    })();
  }

  render() {
    const { selectValue, availableCurrencies, isOpen } = this.state;
    return (
      <>
        <ul className="select">
          <li
            onClick={this.handleClick}
            className="select__positioner__option--picked"
          >
            {selectValue} <ArrowIcon />
          </li>
          {isOpen && (
            <div className="select__positioner">
              {availableCurrencies.map((option) => (
                <li
                  className="select__positioner__option"
                  key={option.symbol}
                  onClick={() => this.handlePickCurrency(option.symbol)}
                >
                  {option.symbol} {option.label}
                </li>
              ))}
            </div>
          )}
        </ul>
      </>
    );
  }
}

export { SelectCurrency };
