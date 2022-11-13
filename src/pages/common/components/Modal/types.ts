import { Dispatch } from 'redux';

export interface Props {
  modalSelector: { isOpen: boolean; title: string; message: string };
  dispatch: Dispatch;
}
