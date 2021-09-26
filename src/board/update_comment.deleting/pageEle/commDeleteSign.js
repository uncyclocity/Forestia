import styled from 'styled-components';
import IcoLoadingRing from '../../../../components/Atoms/Icon/IcoLoadingRing';

const Styles = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CommDeleteSign() {
  return (
    <Styles>
      <IcoLoadingRing />
    </Styles>
  );
}
