import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getSortedPostsData } from '@lib/posts';
import Layout from '@components/layout';
import Banner from '@components/banner';
import PostsList from '@components/postsList';
import { AllPostsDataPropsType } from 'types/postsData';
import { SiteConfig } from '@config';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

function PostsPage({ allPostsData }: AllPostsDataPropsType) {
  const { siteTitle } = SiteConfig;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Banner src="/images/post-banner-test.jpg" alt="게시글 페이지 배너" />
      <PostsList allPostsData={allPostsData} />
    </Layout>
  );
}

export default PostsPage;
