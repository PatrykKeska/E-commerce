import './styles.scss';
import { Component } from 'react';
import { Props } from './types';
import { ReduxHOC } from '../ReduxHOC';
import { closeModal } from '../../../../store/features/modal/modal-slice';
class ModalComponent extends Component<Props> {
  closeModal = () => {
    const { dispatch } = this.props;
    dispatch(closeModal());
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

const Modal = ReduxHOC(ModalComponent);
export { Modal };
