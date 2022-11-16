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
import {
  setBrandName,
  setProductAllColors,
  setProductAllPrices,
  setProductAllSizes,
  setProductGallery,
  setProductId,
  setProductName,
  setProductStock,
} from '../../store/features/product-details/product-details-slice';
import { Modal } from '../common/components/Modal';
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
      const { useParams, dispatch } = this.props;
      const { data } = await getProductDetails(useParams.id);
      dispatch(setProductId(useParams.id));
      dispatch(setProductStock(data.product.inStock));
      dispatch(setProductGallery(this.state.gallery));
      const availableAttributes = await data.product.attributes;
      availableAttributes.map((attribute) => {
        if (attribute.name === 'Color') {
          const colors = attribute.items.map((attr) => attr.value);
          dispatch(setProductAllColors(colors));
          this.setState({
            colors,
          });
        }
        if (attribute.name === 'Size' || attribute.name === 'Capacity') {
          const sizes = attribute.items.map((attr) => attr.value);
          dispatch(setProductAllSizes(sizes));
          this.setState({
            sizes,
          });
        }
      });
      dispatch(setProductGallery(data.product.gallery));
      dispatch(setProductName(data.product.name));
      dispatch(setBrandName(data.product.brand));
      dispatch(setProductAllPrices(data.product.prices));
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
    const { dispatch } = this.props;

    this.setState({
      name: '',
      brand: '',
      colors: null,
      sizes: null,
      gallery: [],
      description: '',
    });
    dispatch(setProductId(''));
    dispatch(setProductAllColors([]));
    dispatch(setProductAllSizes([]));
    dispatch(setProductGallery([]));
    dispatch(setProductName(''));
    dispatch(setBrandName(''));
    dispatch(setProductAllPrices([]));
    dispatch(setProductStock(false));
  }

  render() {
    const { colors, sizes, gallery, description, name, brand, price } =
      this.state;
    return (
      <>
        <Nav />
        <section className="product-details-main-wrapper">
          <Modal />
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
