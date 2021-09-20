import { FiImage } from 'react-icons/fi';
import styled from 'styled-components';

// LblPostingImgIcon
// 분류 : 레이블
// 용도 : 포스팅 리스트에서 이미지가 포함 된 포스팅에 표시됨

export default function IcoExistImg({ isImgExist }) {
  const Styles = styled.div`
    margin-left: 3px;
    color: #20c997;
  `;

  return <Styles>{isImgExist && <FiImage />}</Styles>;
}
