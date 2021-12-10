import { useEffect } from 'react';
import { useDispatch } from '../../../src/context';
import PostingPostTemplate from '../../../components/Templates/PostingPostTemplate';
import Head from 'next/head';

export default function Post() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'post',
    });
    dispatch({ type: 'editpost_data', nowPostingEleObj: {} });
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>게시글 작성</title>
      </Head>
      <PostingPostTemplate />
    </>
  );
}