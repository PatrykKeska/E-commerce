import { Component } from 'react';
import './style.scss';
import { State } from './types/types';
import { ArrowIcon } from '../../../../assets/svg/ArrowIcon';
import { getCurrency } from '../../../../Api/getCurrency';
import {
  CurrencyState,
  setCurrency,
} from '../../../../store/features/currency/currency-slice';
import { Dispatch } from 'redux';
import { handleCartState } from '../../../../store/features/basket/basket-slice';
import { HooksAccessComponent } from '../../../../pages/common/components/HooksAccessComponent';

interface Props {
  dispatch: Dispatch;
  currency: CurrencyState;
}

class SelectCurrencyC extends Component<Props, State> {
  state: State = {
    isOpen: false,
    selectValue: '$',
    availableCurrencies: [],
  };

  handleClick = () => {
    const { dispatch } = this.props;
    this.setState((prev: State) => ({ isOpen: !prev.isOpen }));
    dispatch(handleCartState(false));
  };
  handlePickCurrency = (symbol: string) => {
    this.props.dispatch(setCurrency(symbol));
    this.setState({ isOpen: false });
  };
  componentDidMount() {
    (async () => {
      const result = await getCurrency();
      this.setState({ availableCurrencies: result.data.currencies });
    })();
  }

  render() {
    const { availableCurrencies, isOpen } = this.state;
    const { currency } = this.props;
    return (
      <>
        <ul className='select'>
          <li
            onClick={this.handleClick}
            className='select__positioner__option--picked'
          >
            <>
              {currency.value} <ArrowIcon />
            </>
          </li>
          {isOpen && (
            <div className='select__positioner'>
              {availableCurrencies.map((option) => (
                <li
                  className='select__positioner__option'
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

const SelectCurrency = HooksAccessComponent(SelectCurrencyC);
export { SelectCurrency };
