import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '@lib/getPosts';
import Layout from '@components/common/layout';
import Date from '@components/common/date';
import { PostDataPropsType, PostPageType } from 'types/postsData';

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
    <Layout>
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
    </Layout>
  );
}

export default PostDetailPage;
