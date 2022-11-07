import { Component } from 'react';
import { filterCurrency, getProducts } from '../../../Api/getProducts';
import { Nav } from '../../../layouts/nav';
import { CategoryTitle } from '../components/Category-title';
import './styles.scss';
import { Props, State } from './types/types';
import Product from '../components/Product';
export function HOC(category: string) {
  return class PageView extends Component<Props, State> {
    state: State = {
      category: category,
      products: [],
    };
    componentDidMount() {
      (async () => {
        const result = await getProducts(category);
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
          const result = await getProducts(category);
          const update = await filterCurrency(result, this.props.currency);
          this.setState({ products: [...update] });
        }
      })();
    }

    componentWillUnmount() {
      this.setState({
        products: [],
        category: '',
      });
    }

    render() {
      const { products } = this.state;
      return (
        <>
          <Nav />
          <CategoryTitle name={category} />
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
                attributes={singleProduct.attributes}
              />
            ))}
          </section>
        </>
      );
    }
  };
}
