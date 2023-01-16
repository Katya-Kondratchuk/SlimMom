import { useState } from 'react';
import ModalWindow from './Modal/ModalWindow';
import { useEffect } from 'react';
import AllRouts from 'routs/AllRouts';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperation';
import { selectAuthIsLoadCurrentUser } from 'redux/auth/authSelectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoadCurrentUser = useSelector(selectAuthIsLoadCurrentUser);
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isLoadCurrentUser && <AllRouts />}
      <button onClick={handleCloseModal}>Open modal</button>
      {open && <ModalWindow open={open} onClose={handleCloseModal} />}
    </>
  );
};
