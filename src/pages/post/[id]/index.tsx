import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '@lib/getPosts';
import PostDetailLayout from '@components/common/layout/postDetail';
import Date from '@components/common/date';
import ImageTag from '@components/common/imageTag';
import Tag from '@components/common/tag';
import { PostDataPropsType, PostPageType } from 'types/postsData';
import {
  PostContent,
  PostInfomation,
} from '@components/common/layout/postDetail/style';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as PostPageType;
  const postData = await getPostData(id, 'post');

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds('post');

  return {
    paths,
    fallback: false,
  };
};

function PostDetailPage({ postData }: PostDataPropsType) {
  return (
    <PostDetailLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>{postData.title}</h1>
      <div>
        <PostInfomation>
          <Date dateString={postData.date} />
          <Tag tags={postData.tags} />
        </PostInfomation>
        <div className="post__header-thumbnail">
          <ImageTag
            src={postData.thumbnail}
            width={'600'}
            height={'400'}
            alt="게시글 썸네일"
          />
        </div>
      </div>
      <PostContent dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </PostDetailLayout>
  );
}

export default PostDetailPage;
