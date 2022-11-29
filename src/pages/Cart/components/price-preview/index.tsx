import { Component } from 'react';
import './styles.scss';
import { Props } from './types';
import { HooksAccessComponent } from '../../../common/components/HooksAccessComponent';
class Price extends Component<Props> {
  state = {
    value: '',
    symbol: '',
    amount: 0,
  };
  componentDidMount() {
    const { currency, allPrices } = this.props;
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

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.currency.value !== this.props.currency.value) {
      const { currency, allPrices } = this.props;
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
  }

  render() {
    const { symbol, amount } = this.state;
    return (
      <section className='price-preview-wrapper'>
        <p className='price-preview-wrapper__all'>
          <span className='price-preview-wrapper__currency'>{symbol}</span>
          <span className='price-preview-wrapper__price'>{amount}</span>
        </p>
      </section>
    );
  }
}
const PricePreview = HooksAccessComponent(Price);
export { PricePreview };
