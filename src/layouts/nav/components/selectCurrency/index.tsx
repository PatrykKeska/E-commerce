import { Component } from 'react';
import './style.scss';
import { State } from './types/types';
import { ArrowIcon } from '../../../../assets/svg/ArrowIcon';
import { getCurrency } from '../../../../Api/getCurrency';
import { setCurrency } from '../../../../store/features/currency/currency-slice';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../../../store';

interface Props {
  dispatch: Dispatch;
  currency: string;
}

class SelectCurrency extends Component<Props, State> {
  state: State = {
    isOpen: false,
    selectValue: '$',
    availableCurrencies: [],
  };

  handleClick = () => {
    this.setState((prev: State) => ({ isOpen: !prev.isOpen }));
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
    return (
      <>
        <ul className="select">
          <li
            onClick={this.handleClick}
            className="select__positioner__option--picked"
          >
            {this.props.currency} <ArrowIcon />
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
const mapStateToProps = (state: RootState) => ({
  currency: state.currency.value,
});

export default connect(mapStateToProps)(SelectCurrency);
