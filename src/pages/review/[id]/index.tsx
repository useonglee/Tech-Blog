import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '@lib/getPosts';
import PostDetailLayout from '@components/common/layout/postDetail';
import Date from '@components/common/date';
import { PostDataPropsType, PostPageType } from 'types/postsData';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as PostPageType;
  const postData = await getPostData(id, 'review');

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds('review');

  return {
    paths,
    fallback: false,
  };
};

function ReviewDetailPage({ postData }: PostDataPropsType) {
  return (
    <PostDetailLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </PostDetailLayout>
  );
}

export default ReviewDetailPage;
