import { Component } from 'react';
import { Nav } from '../../layouts/nav';
import { AddCartButton } from './components/add-to-cart-button';
import { ColorPickerComponent } from './components/color-picker';
import { SizePickerComponent } from './components/size-picker';
import { ProductPriceComponent } from './components/product-price';
import { ProductDescription } from './components/product-description/product-description';
import './styles.scss';
import { ProductName } from './components/product-name';
import { ParamHoc } from '../common/components/ParamHOC';
import { Props, State } from './types';
import { getProductDetails } from '../../Api/getProductDetails';
import { ProductImageComponent } from './components/product-image';
class ProductDetailsPage extends Component<Props, State> {
  state: State = {
    name: '',
    brand: '',
    colors: null,
    sizes: null,
    gallery: [],
    description: '',
    price: [],
  };
  componentDidMount() {
    (async () => {
      const { useParams } = this.props;
      const { data } = await getProductDetails(useParams.id);
      const availableAttributes = await data.product.attributes;
      availableAttributes.map((attribute) => {
        if (attribute.name === 'Color') {
          const colors = attribute.items.map((attr) => attr.value);
          this.setState({
            colors,
          });
        }
        if (attribute.name === 'Size' || attribute.name === 'Capacity') {
          const sizes = attribute.items.map((attr) => attr.value);
          this.setState({
            sizes,
          });
        }
      });
      this.setState({
        gallery: data.product.gallery,
        name: data.product.name,
        brand: data.product.brand,
        description: data.product.description,
        price: data.product.prices,
      });
    })();
  }
  componentWillUnmount() {
    this.setState({
      name: '',
      brand: '',
      colors: null,
      sizes: null,
      gallery: [],
      description: '',
    });
  }

  render() {
    const { colors, sizes, gallery, description, name, brand, price } =
      this.state;
    return (
      <>
        <Nav />
        <section className="product-details-main-wrapper">
          <section className="product-details-main-wrapper__left-column">
            <ProductImageComponent
              name={name}
              attributes={gallery}
            />
          </section>
          <section className="product-details-main-wrapper__right-column">
            <ProductName
              brand
              name={brand}
            />
            <ProductName name={name} />
            {sizes && <SizePickerComponent attributes={sizes} />}
            {colors && <ColorPickerComponent attributes={colors} />}
            <ProductPriceComponent price={price} />
            <AddCartButton />
            <ProductDescription attributes={description} />
          </section>
        </section>
      </>
    );
  }
}
const ProductDetails = ParamHoc(ProductDetailsPage);
export { ProductDetails };
