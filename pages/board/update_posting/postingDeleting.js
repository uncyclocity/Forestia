import BoardTitle from '../../../src/common/boardTitle';
import { useEffect } from 'react';
import { useDispatch, useReducerState } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import InDeletePostingBoardTitle from '../../../src/board/update_posting.deleting/pageEle/inDeletePostingBoardTitle';
import DeleteSign from '../../../src/board/update_posting.deleting/pageEle/deleteSign';
import styled from 'styled-components';
import FourAnimationedBox from '../../../src/boxEle/FourAnimationdBox';
import letsDeletePostingAndImage from '../../../src/board/update_comment.deleting/etcFunc/letsDeletePostingAndImage';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function PostingDeleting() {
  const dispatch = useDispatch();
  const nowPostingEleObj = useReducerState().nowPostingEleObj;
  useEffect(() => {
    mountAnimation(dispatch, 'deleting');
    letsDeletePostingAndImage(nowPostingEleObj, dispatch);
    return () => {
      dispatch({ type: 'editpost_data', editData: {} });
    };
  }, [dispatch, nowPostingEleObj]);

  return (
    <FourAnimationedBox>
      <BoxStyles>
        <BoardTitle>
          <InDeletePostingBoardTitle />
        </BoardTitle>
        <DeleteSign />
      </BoxStyles>
    </FourAnimationedBox>
  );
}
