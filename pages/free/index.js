import { AiOutlineCloud } from "react-icons/ai";
import styled from "styled-components";
import { useReducerState } from "../_context";
import Link from "next/link";
import Board_title from "../../styles/board_title";
import Box from "../../styles/box";
import { BoxAnimation } from "../../styles/animation";

const Styles = styled.div`
  padding: 20px 30px 5px 30px;

  .content_list {
    transform: translateX(-6.5%);
    li {
      list-style-type: none;
      &:not(:first-child) {
        margin-top: 10px;
      }
      &:hover {
        color: #20c997;
      }
    }
  }
`;

export default function Free() {
  const state = useReducerState();
  const animate = state.animate.free;
  const freeBoard = state.freeBoard;

  return (
    <BoxAnimation animate={animate}>
      <Box>
        <Styles>
          <Board_title>
            <div className="icon">
              <AiOutlineCloud />
            </div>
            자게
          </Board_title>
          <div className="content_list">
            <ul>
                {freeBoard && 
                  freeBoard.map((post, index) => {
                  return (
                    <li key={index}>
                      <Link
                        as={`/free/${post.id}`}
                        href={`/free/posts?id=${post.id}`}
                      >
                        <a>{post.title}</a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </Styles>
      </Box>
    </BoxAnimation>
  );
}
