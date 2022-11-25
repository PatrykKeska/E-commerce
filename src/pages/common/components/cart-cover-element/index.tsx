import { Component } from 'react';
import { ReduxHOC } from '../ReduxHOC';
import './styles.scss';
import { Props } from './types';
import { handleCartState } from '../../../../store/features/basket/basket-slice';

class CartCoverElementC extends Component<Props> {
  handleClick = () => {
    const {  dispatch } = this.props;
    dispatch(handleCartState(false));
  };

  componentDidMount() {
    const { basketSelector } = this.props;
    if (basketSelector.isOpen) {
      document.body.style.overflowY = 'hidden';
    }
  }
  componentWillUnmount() {
    document.body.style.overflowY = 'unset';
  }

  render() {
    const { basketSelector } = this.props;
    const { isOpen } = basketSelector;
    console.log(isOpen)

    return (
<>
      <div
        key={String(isOpen)}
        style={{ display: `${isOpen ? 'block' : 'none'}` }}
        onClick={this.handleClick}
        className='cart-cover-element'
      />
</>
    );
  }
}

const CartCoverElement = ReduxHOC(CartCoverElementC);
export { CartCoverElement };
