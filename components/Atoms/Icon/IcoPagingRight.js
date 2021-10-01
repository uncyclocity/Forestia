import { AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';

// IcoPagingLeft
// 분류 : 아이콘
// 용도 : 리스트 페이징 오른쪽 화살표

const Styles = styled.div`
  position: relative;
  top: 1px;
`;

export default function IcoPagingRight() {
  return (
    <Styles>
      <AiOutlineRight />
    </Styles>
  );
}