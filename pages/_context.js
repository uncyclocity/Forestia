import { createContext, useContext, useReducer } from 'react';

export const StateCtx = createContext(null);
export const DispatchCtx = createContext(null);

export default function Context({ children, freeBoard }) {
  const initState = {
    nowPage: null,
    animation: 5,
    freeBoard,
    photoBoard: [
      {
        id: 0,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        title: '테스트1',
        content: '짤게/테스트1 입니다.',
        comments: [
          {
            id: 0,
            author: '백괴',
            date: '2021-08-02 22:39:08',
            content: '짤게/테스트1/댓글1 입니다.',
          },
          {
            id: 1,
            author: '백괴',
            date: '2021-08-02 22:39:08',
            content: '짤게/테스트1/댓글2 입니다.',
          },
          {
            id: 2,
            author: '백괴',
            date: '2021-08-02 22:39:08',
            content: '짤게/테스트1/댓글3 입니다.',
          },
        ],
      },
      {
        id: 1,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        title: '테스트2',
        content: '짤게/테스트2 입니다.',
        comments: [
          {
            id: 0,
            author: '백괴',
            date: '2021-08-02 22:39:08',
            content: '짤게/테스트2/댓글1 입니다.',
          },
          {
            id: 1,
            author: '백괴',
            date: '2021-08-02 22:39:08',
            content: '짤게/테스트2/댓글2 입니다.',
          },
          {
            id: 2,
            author: '백괴',
            date: '2021-08-02 22:39:08',
            content: '짤게/테스트2/댓글3 입니다.',
          },
        ],
      },
      {
        id: 2,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        title: '테스트3',
        content: '짤게/테스트3 입니다.',
        comments: [
          {
            id: 0,
            author: '백괴',
            date: '2021-08-02 22:39:08',
            content: '짤게/테스트3/댓글1 입니다.',
          },
          {
            id: 1,
            author: '백괴',
            date: '2021-08-02 22:39:08',
            content: '짤게/테스트3/댓글2 입니다.',
          },
          {
            id: 2,
            author: '백괴',
            date: '2021-08-02 22:39:08',
            content: '짤게/테스트3/댓글3 입니다.',
          },
        ],
      },
    ],
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'initiate': {
        return {
          ...state,
          nowPage: action.nowPage,
          animation: action.animation,
        };
      }
      case 'change_animation': {
        return {
          ...state,
          animation: action.animation,
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StateCtx.Provider value={state}>
      <DispatchCtx.Provider value={dispatch}>{children}</DispatchCtx.Provider>
    </StateCtx.Provider>
  );
}

export const useReducerState = () => {
  const state = useContext(StateCtx);
  if (state === undefined) throw new Error('Context를 찾을 수 없습니다.');
  return state;
};

export const useDispatch = () => {
  const dispatch = useContext(DispatchCtx);
  if (dispatch === undefined) throw new Error('Context를 찾을 수 없습니다.');
  return dispatch;
};
