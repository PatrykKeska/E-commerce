import { Component } from 'react';
import { Props, State } from './types';
import './styles.scss';
import { RefHOC } from '../../../common/components/RefHOC';
import { LeftArrow } from '../../../../assets/svg/LeftArrow';
import { RightArrow } from '../../../../assets/svg/RightArrow';
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
  handleScroll = (direction: string) => {
    const { useRef } = this.props;
    if (direction === 'left') {
      useRef.current.scrollLeft -= 50;
    } else if (direction === 'right') {
      useRef.current.scrollLeft += 50;
    }
  };

  render() {
    const { attributes, name, useRef } = this.props;
    const { mainPhoto } = this.state;
    return (
      <section className='product-image-wrapper'>
        <section
          ref={useRef}
          className='product-image-wrapper__preview'
        >
          {attributes.map((photo, index) => (
            <img
              onClick={() => this.handleClick(index)}
              key={photo}
              className='product-image-wrapper__preview__photo'
              src={photo}
              alt={`this is image of ${name}`}
            />
          ))}
        </section>
        {attributes.length > 1 && (
          <div>
            <button
              className='product-image-wrapper__button'
              onClick={() => this.handleScroll('left')}
            >
              <LeftArrow />
            </button>
            <button
              className='product-image-wrapper__button'
              onClick={() => this.handleScroll('right')}
            >
              <RightArrow />
            </button>
          </div>
        )}
        <img
          key={mainPhoto}
          className='product-image-wrapper__main-photo'
          src={attributes[this.state.mainPhoto]}
          alt={`this is image of ${name}`}
        />
      </section>
    );
  }
}

const ProductImageComponent = RefHOC(ProductImage);
export { ProductImageComponent };
