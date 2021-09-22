import styled from 'styled-components';

// TxtyPostingDate
// 분류 : 텍스트
// 용도 : 포스팅 페이지에서 해당 포스팅의 게시날짜를 표시

export default function TxtPostingDate({ date }) {
  const Styles = styled.div`
    color: #20c997;
  `;

  return <Styles>{date}</Styles>;
}