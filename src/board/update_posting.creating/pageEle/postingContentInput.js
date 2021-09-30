import { useState } from 'react';
import styled from 'styled-components';
import { BtnFreePhotoSwitch } from '../../../../components/Atoms/Button/BtnFreePhotoSwitch';
import { BtnPosting } from '../../../../components/Atoms/Button/BtnPosting';
import { useDispatch, useReducerState } from '../../../common/context';
import getImagesUrlArr from '../etcFunc/getImagesUrlArr';
import letsDoUploadPosting from '../etcFunc/letsDoUploadPosting';
import LinBetweenTitleContent from '../../../../components/Atoms/Line/LinBetweenTitleContent';
import ImgUploadedImagePreview from '../../../../components/Atoms/Image/ImgUploadedImagePreview';
import BtnImgUpload from '../../../../components/Atoms/Button/BtnImgUpload';
import TxtImgUpload from '../../../../components/Atoms/Text/TxtImgUpload';
import IptTitle from '../../../../components/Atoms/Input/IptTitle';
import IptContent from '../../../../components/Atoms/Input/IptContent';

const ContentInputStyle = styled.div`
  flex-direction: column;
  margin-bottom: 15px;

  .content_title_input_box {
    width: 640px;
    font-size: 25px;
    font-weight: bold;
    color: #464646;
    border: none;
    outline: none;
    &::placeholder {
      color: #aaaaaa;
    }
  }

  .content_input_box {
    width: 640px;
    height: 300px;

    margin-bottom: 10px;

    border: none;
    border-bottom: 1px solid #e9ecef;

    outline: none;

    font-size: 17px;
    font-family: inherit;

    &::placeholder {
      color: #aaaaaa;
      font-style: italic;
    }
  }

  .upload_image_area {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e9ecef;
    margin-bottom: 10px;

    .uploadimg_btn_area {
      display: flex;
      flex-direction: column;
    }

    .uploadedimg_list {
      display: flex;
      overflow-x: scroll;
      scrollbar-width: thin;
      border-radius: 3px;
    }
  }
`;

export default function PostingContentInput() {
  const postCnt = useReducerState().postCnt;
  const dispatch = useDispatch();
  const [postingEle, setPostingEle] = useState({
    title: '',
    content: '',
    imagesUrlArr: [],
  });
  const [selBoard, setSelBoard] = useState('free');
  const [files, setFiles] = useState([]);

  return (
    <>
      <BtnFreePhotoSwitch selBoard={selBoard} setSelBoard={setSelBoard} />
      <ContentInputStyle>
        <IptTitle
          onChange={(e) =>
            setPostingEle({ ...postingEle, title: e.target.value })
          }
          value={postingEle.title}
        />
        <LinBetweenTitleContent />
        <IptContent
          onChange={(e) =>
            setPostingEle({ ...postingEle, content: e.target.value })
          }
          value={postingEle.content}
        />
        <div className="upload_image_area">
          <div className="uploadimg_btn_area">
            <TxtImgUpload />
            <BtnImgUpload
              onChange={(e) => {
                setFiles(e.target.files);
                setPostingEle({
                  ...postingEle,
                  imagesUrlArr: getImagesUrlArr(e.target.files),
                });
              }}
            />
          </div>
          <div className="uploadedimg_list">
            {postingEle.imagesUrlArr.length > 0 &&
              postingEle.imagesUrlArr.map((imageUrl, index) => {
                return (
                  <ImgUploadedImagePreview key={index} imageUrl={imageUrl} />
                );
              })}
          </div>
        </div>
        <div
          onClick={() => {
            if (!postCnt) {
              if (postingEle.content && postingEle.title) {
                if (
                  selBoard === 'photo' &&
                  postingEle.imagesUrlArr.length <= 0
                ) {
                  alert('짤게는 이미지 업로드가 필수입니다.');
                } else {
                  letsDoUploadPosting(
                    selBoard,
                    postingEle.title,
                    postingEle.content,
                    files,
                    dispatch,
                  );
                }
              } else {
                alert('제목 및 내용을 입력하세요');
              }
            }
          }}
        >
          <BtnPosting text="업로드" />
        </div>
      </ContentInputStyle>
    </>
  );
}
