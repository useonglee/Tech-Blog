import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { getSortedPostsData } from '@lib/posts';
import Layout from '@components/common/layout';
import Banner from '@components/common/banner';
import PostsList from '@components/common/postsList';
import { SiteConfig } from '@config';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

function PostsPage({
  allPostsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { siteTitle } = SiteConfig;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Banner src="/images/post-banner-test.jpg" alt="게시글 페이지 배너" />
      <PostsList allPostsData={allPostsData} pageType="게시글" />
    </Layout>
  );
}

export default PostsPage;
