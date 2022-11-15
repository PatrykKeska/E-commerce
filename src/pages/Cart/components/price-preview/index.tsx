import { Component } from 'react';
import './styles.scss'
import {Props} from './types';
import {priceAdding} from '../../../../store/features/basket/basket-slice';
import {ReduxHOC} from '../../../common/components/ReduxHOC';
class Price extends Component<Props> {
  state = {
    value: '',
    symbol: '',
    amount: 0,
  };
  componentDidMount() {
      const { currency, allPrices, dispatch } = this.props;
     (async () => {
      const pickedPrice = allPrices.filter(
        (singlePrice) => singlePrice.currency.symbol === currency.value,
      );
      this.setState({
        symbol: pickedPrice[0].currency.symbol,
        amount: pickedPrice[0].amount,
      });
    })();

  }

  render() {
    const { allPrices, currency } = this.props;
    const { symbol, amount } = this.state;
    return (
      <section className="price-preview-wrapper">
        <p className="price-preview-wrapper__all">
          <span className="price-preview-wrapper__currency">{symbol}</span>
          <span className="price-preview-wrapper__price">{amount}</span>
        </p>
      </section>
    );
  }
}
const PricePreview = ReduxHOC(Price)
export { PricePreview };
