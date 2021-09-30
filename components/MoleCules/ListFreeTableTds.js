import styled from 'styled-components';
import IcoImagePosting from '../Atoms/Icon/IcoImagePosting';
import TxtCommentAmount4List from '../Atoms/Text/TxtCommentAmount4List';
import TxtPostingAuthor4List from '../Atoms/Text/TxtPostingAuthor4List';
import TxtPostingDate4List from '../Atoms/Text/TxtPostingDate4List';
import TxtPostingTitle from '../Atoms/Text/TxtPostingTitle';

const PostingTitleStyle = styled.td`
  display: flex;
  flex-direction: row;
`;

export default function ListFreeTableTds({ posting, onClick }) {
  return (
    <tr onClick={onClick}>
      <PostingTitleStyle>
        <TxtPostingTitle title={posting.title} />
        {posting.imagesUrl.length > 0 && <IcoImagePosting />}
        {posting.comments.length > 0 && (
          <TxtCommentAmount4List amount={posting.imagesUrl.length} />
        )}
      </PostingTitleStyle>
      <td>
        <TxtPostingAuthor4List author={posting.author} />
      </td>
      <td>
        <TxtPostingDate4List date={posting.date} />
      </td>
    </tr>
  );
}
