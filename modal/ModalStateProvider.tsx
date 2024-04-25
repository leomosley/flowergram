'use client';

import { useState, ReactNode } from 'react';
import { ModalStateContext } from '.';

export default function ModalStateProvider({
  children,
}: {
  children: ReactNode
}) {

  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');

  return (
    <ModalStateContext.Provider
      value={{
        open,
        setOpen,
        url,
        setUrl
      }}
    >
      {children}
    </ModalStateContext.Provider>
  );
};