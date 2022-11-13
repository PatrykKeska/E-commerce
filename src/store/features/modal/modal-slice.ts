import { createSlice } from '@reduxjs/toolkit';
interface ModalInterface {
  isOpen: boolean;
  title: string;
  message: string;
}

const initialState: ModalInterface = {
  isOpen: false,
  title: '',
  message: '',
};

interface setModalTittle {
  payload: string;
}
interface setModalMessage {
  payload: string;
}

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state: ModalInterface) => {
      state.isOpen = true;
    },
    closeModal: (state: ModalInterface) => {
      state.isOpen = false;
    },
    setTitle: (state: ModalInterface, action: setModalTittle) => {
      state.title = action.payload;
    },
    setMessage: (state: ModalInterface, action: setModalMessage) => {
      state.message = action.payload;
    },
  },
});

export const { openModal, closeModal, setTitle, setMessage } =
  ModalSlice.actions;
