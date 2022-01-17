import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '@lib/posts';
import Date from '@components/common/Date';
import Layout from '@components/common/Layout';
import Banner from '@components/common/Banner';
import { AllPostsDataPropsType, PostDataType } from 'types/postsData';
import { SiteConfig } from '@config';
import PostsList from '@components/common/PostsList';

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
