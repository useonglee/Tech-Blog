import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getSortedPostsData } from '@lib/getPosts';
import MainLayout from '@components/common/layout/main';
import Banner from '@components/common/banner';
import PostsList from '@components/common/post/postsList';
import { AllPostsDataPropsType } from 'types/postsData';
import { SiteConfig } from '@config';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData('review');

  return {
    props: {
      allPostsData,
    },
  };
};

function ReviewPage({ allPostsData }: AllPostsDataPropsType) {
  const { siteTitle } = SiteConfig;

  return (
    <MainLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Banner src="/images/post-banner-test.jpg" alt="업무 회고 페이지 배너" />
      <PostsList allPostsData={allPostsData} pageType="업무 회고" />
    </MainLayout>
  );
}

export default ReviewPage;
