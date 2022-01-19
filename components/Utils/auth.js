import { useEffect, useState } from 'react';
import { useDispatch } from '../Contexts/context';
import { doUser } from '../../utils/doApi';

const getStoredUser = async (dispatch) => {
  if (typeof window !== 'undefined') {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const { id, email } = await doUser.get.byToken(storedToken);
      const user = await doUser.get.byId(id);
      if (user !== '') {
        dispatch({
          type: 'login',
          userName: user.nickname,
          userEmail: email,
          userId: id,
        });
      }
    }
  }
};

export default function Auth({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    getStoredUser(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
