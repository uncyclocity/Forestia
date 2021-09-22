import styled from 'styled-components';

// BtnGotoPosting
// 분류 : 버튼
// 용도 : 포스팅 작성 / 작성 취소 버튼에 쓰인다.

export default function BtnGotoPosting({ btnText, children }) {
  const Styles = styled.div`
    width: 120px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    cursor: pointer;

    .posting_icon {
      font-size: 30px;
    }

    .posting_text {
      font-size: 16px;
      font-weight: bold;
    }
  `;

  return (
    <Styles>
      <div className="posting_icon">{children}</div>
      <div className="posting_text">{btnText}</div>
    </Styles>
  );
}