import { Component } from 'react';
import { Props, State } from './types';
import './styles.scss';

class ProductImage extends Component<Props, State> {
  state: State = {
    mainPhoto: 0,
    gallery: [],
  };
  handleClick = (index: number) => {
    this.setState({
      mainPhoto: index,
    });
  };

  render() {
    const { attributes, name } = this.props;
    const { mainPhoto } = this.state;
    return (
      <section className="product-image-wrapper">
        <section className="product-image-wrapper__preview">
          {attributes.map((photo, index) => (
            <img
              onClick={() => this.handleClick(index)}
              key={photo}
              className="product-image-wrapper__preview__photo"
              src={photo}
              alt={`this is image of ${name}`}
            />
          ))}
        </section>
        <img
          key={mainPhoto}
          className="product-image-wrapper__main-photo"
          src={attributes[this.state.mainPhoto]}
          alt={`this is image of ${name}`}
        />
      </section>
    );
  }
}

export { ProductImage };
