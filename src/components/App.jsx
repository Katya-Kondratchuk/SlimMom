<<<<<<< HEAD
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
=======
import { useEffect } from 'react';
import AllRouts from 'routs/AllRouts';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperation';
import { selectAuthIsLoadCurrentUser } from 'redux/auth/authSelectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoadCurrentUser = useSelector(selectAuthIsLoadCurrentUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <>{!isLoadCurrentUser && <AllRouts />}</>;
>>>>>>> 81789202532ac967d8753cdd8cf68c163ea67a21
};
