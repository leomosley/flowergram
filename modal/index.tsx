import { createContext, Dispatch, SetStateAction, useContext } from 'react';


export interface ModalState {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  url?: string;
  setUrl?: Dispatch<SetStateAction<string>>;
}

export const ModalStateContext = createContext<ModalState>({});

export const useModalContext = (): ModalState => {
  const context = useContext(ModalStateContext);
  if (!context) {
    throw new Error('useModalState must be used within a ModalStateProvider');
  }
  return context;
};