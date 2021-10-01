import { useState } from 'react';
import styled from 'styled-components';
import { BtnPosting } from '../Atoms/Button/BtnPosting';
import IptContent from '../Atoms/Input/IptContent';
import IptTitle from '../Atoms/Input/IptTitle';
import LblFreePhoto from '../Atoms/Label/LblFreePhoto';
import LinBetweenTitleContent from '../Atoms/Line/LinBetweenTitleContent';
import { useDispatch, useReducerState } from '../../src/common/context';
import postCntSwitcher from '../../src/common/postCntSwitcher';
import { postPosting } from '../../src/doApi/doApi';

const ContentInputStyle = styled.div`
  margin: 20px 0 15px 0;
`;

export default function PostingEditingPage() {
  const dispatch = useDispatch();
  const postCnt = useReducerState().postCnt;
  const { board_type, id, title, content } = useReducerState().nowPostingEleObj;
  const [editEle, setEditEle] = useState({ title, content });

  return (
    <>
      <LblFreePhoto board_type={board_type} />
      <ContentInputStyle>
        <IptTitle
          onChange={(e) => setEditEle({ ...editEle, title: e.target.value })}
          value={editEle.title}
        />
        <LinBetweenTitleContent />
        <IptContent
          onChange={(e) => setEditEle({ ...editEle, content: e.target.value })}
          value={editEle.content}
        />
        <BtnPosting
          text="수정"
          onClick={async () => {
            if (!postCnt) {
              if (editEle.title && editEle.content) {
                postCntSwitcher(dispatch, true);
                await postPosting.doPostEdit(
                  board_type,
                  id,
                  editEle.title,
                  editEle.content,
                  dispatch,
                );
                postCntSwitcher(dispatch, false);
              } else {
                alert('제목 및 내용을 입력하세요');
              }
            }
          }}
        />
      </ContentInputStyle>
    </>
  );
}