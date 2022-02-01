import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '@lib/posts';
import Layout from '@components/common/layout';
import Date from '@components/common/date';
import { PostDataPropsType } from 'types/postsData';

interface PageType {
  [key: string]: string | undefined;
  id: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as PageType;
  const postData = await getPostData(id);

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

function Post({ postData }: PostDataPropsType) {
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

export default Post;
