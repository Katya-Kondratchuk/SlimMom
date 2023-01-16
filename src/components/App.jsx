import { useState } from 'react';
import ModalWindow from './Modal/ModalWindow';

export const App = () => {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={handleCloseModal}>Open modal</button>
      {open && <ModalWindow open={open} onClose={handleCloseModal} />}
    </>
  );
};
