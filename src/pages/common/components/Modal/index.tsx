import './styles.scss';
import { Component } from 'react';
import { Props } from './types';
import { closeModal } from '../../../../store/features/modal/modal-slice';
import { setBasketQuantity } from '../../../../store/features/basket/basket-slice';
import { HooksAccessComponent } from '../HooksAccessComponent';
class ModalComponent extends Component<Props> {
  getTotalQuantity = (basket) => {
    if (basket) {
      const { dispatch } = this.props;
      const quantityArray = basket.map((item) => {
        return item.quantity;
      });
      const quantitySummary = quantityArray.reduce((a, b) => a + b, 0);
      dispatch(setBasketQuantity(quantitySummary));
    }
  };

  closeModal = () => {
    const { dispatch, basketSelector } = this.props;
    dispatch(closeModal());
    this.getTotalQuantity(basketSelector.items);
  };
  render() {
    const { modalSelector } = this.props;
    return (
      <>
        {modalSelector.isOpen ? (
          <div className='response-modal'>
            <h3 className='response-modal__tittle'>{modalSelector.title}</h3>
            <p className='response-modal__message'>{modalSelector.message}</p>
            <button
              onClick={this.closeModal}
              className='response-modal__button'
            >
              Close
            </button>
          </div>
        ) : null}
      </>
    );
  }
}

const Modal = HooksAccessComponent(ModalComponent);
export { Modal };
