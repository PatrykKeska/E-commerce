import { Component } from 'react';
import { Nav } from '../../layouts/nav';
import { filterCurrency, getProducts } from '../../Api/getProducts';
import { Product } from '../common/components/Product';
import { Props, State } from './types/types';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import './styles.scss';
import {CategoryTitle} from '../common/components/Category-title';
class Clothes extends Component<Props, State> {
  state: State = {
    category: 'clothes',
    products: [],
  };
  componentDidMount() {
    (async () => {
      const result = await getProducts('clothes');
      const update = await filterCurrency(result, this.props.currency);

      this.setState({
        category: result.data.category.name,
        products: [...update],
      });
    })();
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    (async () => {
      if (prevProps.currency !== this.props.currency) {
        const result = await getProducts('clothes');
        const update = await filterCurrency(result, this.props.currency);
        this.setState({ products: [...update] });
      }
    })();
  }

  componentWillUnmount() {
    this.setState({
      products: [],
      category: 'clothes',
    });
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <Nav />
          <CategoryTitle name='clothes'/>
        <section className="main-section">
          {products.map((singleProduct) => (
            <Product
              key={singleProduct.id}
              name={singleProduct.name}
              id={singleProduct.id}
              inStock={singleProduct.inStock}
              gallery={singleProduct.gallery}
              currency={singleProduct.prices.currency.symbol}
              prices={singleProduct.prices.amount}
              category={singleProduct.category}
            />
          ))}
        </section>

      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  currency: state.currency.value,
});

export default connect(mapStateToProps)(Clothes);
