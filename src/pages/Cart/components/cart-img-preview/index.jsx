import './style.scss';
import { Component } from 'react';
import { Props, State } from './types';
import { LeftArrow } from '../../../../assets/svg/LeftArrow';
import { RightArrow } from '../../../../assets/svg/RightArrow';

class CartImgPreview extends Component<Props, State> {
  state: State = {
    max: 0,
    min: 0,
    current: 0,
  };

  handlePhotoUp = () => {
    if (this.state.max - 1 === this.state.current) {
      return;
    }
    this.setState((prev) => ({ current: prev.current + 1 }));
  };
  handlePhotoDown = () => {
    if (this.state.current === 0) {
      return;
    }
    this.setState((prev) => ({ current: prev.current - 1 }));
  };
  componentDidMount() {
    const { gallery } = this.props;
    this.setState({
      max: this.props.gallery.length - 1,
    });
  }

  render() {
    const { gallery } = this.props;
    const { current, max } = this.state;
    return (
      <div className='cart-img-preview-wrapper'>
        <img
          key={gallery[current]}
          className='cart-img-preview-wrapper__photo'
          src={gallery[current]}
          alt='this is photo'
        />
        {max > 1 && (
          <>
            <button
              className={`cart-img-preview-wrapper__arrow-left cart-arrow-button ${
                current === 0 ? 'no-more-photos' : ''
              }`}
              onClick={this.handlePhotoDown}
            >
              <LeftArrow />
            </button>

            <button
              className={`cart-img-preview-wrapper__arrow-right cart-arrow-button ${
                max - 1 === current ? 'no-more-photos' : ''
              }`}
              onClick={this.handlePhotoUp}
            >
              <RightArrow />
            </button>
          </>
        )}
      </div>
    );
  }
}

export { CartImgPreview };
