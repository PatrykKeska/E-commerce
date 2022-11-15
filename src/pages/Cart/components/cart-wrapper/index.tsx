import { Component } from 'react';
import { ReduxHOC } from '../../../common/components/ReduxHOC';
import { BasketColorPreview } from '../cart-color-preview';
import { BasketSizePreview } from '../cart-size-preview';
import './styles.scss';
import { PricePreview } from '../price-preview';
import {Nav} from '../../../../layouts/nav';
class CartWrapper extends Component<any> {
  state = {
    total: 0,
  };
  componentDidMount() {
    const { basketSelector, currency, dispatch } = this.props;

    const data = basketSelector.items.map((item) => {
      const values = item.allPrices.filter(
        (singlePrice) => singlePrice.currency.symbol === currency.value,
      );
      return values[0];
    });
    data.map((item) =>
      this.setState((prev: any) => ({ total: prev.total + item.amount })),
    );
  }

  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ) {
    const {basketSelector, currency} = this.props
    if(prevProps.currency !== this.props.currency){
      this.setState({
        total: 0
      })
      const data = basketSelector.items.map((item) => {
        const values = item.allPrices.filter(
            (singlePrice) => singlePrice.currency.symbol === currency.value,
        );
        return values[0];
      });
      data.map((item) =>
          this.setState((prev: any) => ({ total: prev.total + item.amount })),
      );
    }
  }

  render() {
    const { basketSelector, currency, dispatch } = this.props;
    const { total } = this.state;
    console.log(basketSelector, total);
    return (
      <>
        <Nav />
        <section className="cart-wrapper">
          <h2 className="cart-wrapper__title">cart</h2>

          {basketSelector.items.map((item) => (
            <div
              key={Math.random()}
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
          <p>quantity : {basketSelector.items.length}</p>
          <p>total price : {total}</p>
        </section>
      </>
    );
  }
}

const CartPage = ReduxHOC(CartWrapper);
export { CartPage };
