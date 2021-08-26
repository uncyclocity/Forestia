import { AiOutlineCamera } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { useDispatch, useReducerState } from '../_context';
import Board_title from '../../styles/board_title';
import { useEffect } from 'react';
import {
  mountAnimation,
  unmountAnimation,
} from '../../fixed/AnimationController';
import St_photo from '../../styles/pages/board/St_photo';

export default function Photo() {
  const dispatch = useDispatch();
  const photoBoard = useReducerState().photoBoard;

  useEffect(() => {
    mountAnimation(dispatch, 'photo');
  }, [dispatch]);

  return (
    <St_photo>
      <Board_title backURL="/home">
        <div className="icon">
          <AiOutlineCamera />
        </div>
        <div className="title_name">짤게</div>
      </Board_title>
      <div className="content_list">
        <ul>
          {photoBoard &&
            photoBoard.map((post, index) => {
              return (
                <li key={index}>
                  <div
                    onClick={() =>
                      unmountAnimation(
                        0,
                        dispatch,
                        `/board/post/?board=photo&post_id=${post.id}`,
                      )
                    }
                  >
                    <a>
                      {post.title}&nbsp;
                      <div className="comment_amount">
                        <div className="comment_icon">
                          <FaRegCommentAlt />
                        </div>
                        <div className="amount">{post.comments.length}</div>
                      </div>
                    </a>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </St_photo>
  );
}
