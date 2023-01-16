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
};
