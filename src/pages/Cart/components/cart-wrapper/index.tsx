import { Component } from 'react';
import { ReduxHOC } from '../../../common/components/ReduxHOC';
import { BasketColorPreview } from '../cart-color-preview';
import { BasketSizePreview } from '../cart-size-preview';
import './styles.scss';
import { PricePreview } from '../price-preview';
import { Nav } from '../../../../layouts/nav';
class CartWrapper extends Component<any> {
  state = {
    total: 0,
    tax: 0
  };

  getPickedCurrencyPrices = (items, currency)=> {
    const data = items.map((item) => {
      const values = item.allPrices.filter(
          (singlePrice) => singlePrice.currency.symbol === currency.value,
      );
      return values[0];
    });
    data.map((item) =>
        this.setState((prev: any) => ({ total: prev.total + item.amount, tax: (prev.total + item.amount) * 0.21})),
    );
  }

  componentDidMount() {
    const { basketSelector, currency } = this.props;
    const {items} = basketSelector
    this.getPickedCurrencyPrices(items, currency)
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>) {
    const { basketSelector, currency } = this.props;
      const {items} = basketSelector
    if (prevProps.currency !== this.props.currency) {
      this.setState({
        total: 0,
        tax:0,
      });
      this.getPickedCurrencyPrices(items, currency)
    }
  }
  render() {
    const { basketSelector, currency, dispatch } = this.props;
    const { total, tax } = this.state;
    return (
      <>
        <Nav />
        <section className="cart-wrapper">
          <h2 className="cart-wrapper__title">cart</h2>

          {basketSelector.items.map((item,index) => (
            <div
              key={index}
              className="cart-wrapper__product-wrapper"
            >
              <section className="cart-wrapper__product-wrapper__left-column">
                <h3 className="cart-wrapper__product-wrapper__left-column__brand">
                  {item.brand}
                </h3>
                <h3 className="cart-wrapper__product-wrapper__left-column__name">
                  {item.name}
                </h3>
                <PricePreview
                  currency={currency}
                  allPrices={item.allPrices}
                />
                {item.allColors.length > 1 && (
                  <BasketColorPreview
                    pickedColor={item.color}
                    attributes={item.allColors}
                  />
                )}
                {item.allSizes.length > 1 && (
                  <BasketSizePreview
                    attributes={item.allSizes}
                    pickedSize={item.size}
                  />
                )}
              </section>
              <section className="cart-wrapper__product-wrapper__right-column">
                column second
              </section>
            </div>
          ))}
          <section className="cart-wrapper__summary">
            <p className="cart-wrapper__summary__description">
              Tax 21%:
              <span className="cart-wrapper__summary__description__span">
                {currency.value}{tax.toFixed(2)}
              </span>
            </p>
            <p className="cart-wrapper__summary__description">
              Quantity:
              <span className="cart-wrapper__summary__description__span">
                {basketSelector.items.length}
              </span>
            </p>
            <p className="cart-wrapper__summary__description">
              Total:
              <span className="cart-wrapper__summary__description__span">
                {currency.value}
                {total.toFixed(2)}
              </span>
            </p>
          </section>
        </section>
      </>
    );
  }
}

const CartPage = ReduxHOC(CartWrapper);
export { CartPage };
