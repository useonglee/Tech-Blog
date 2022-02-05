import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { getSortedPostsData } from '@lib/getPosts';
import MainLayout from '@components/common/layout/main';
import Banner from '@components/common/banner';
import PostsList from '@components/common/post/postsList';
import { SiteConfig } from '@config';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData('post');

  return {
    props: {
      allPostsData,
    },
  };
};

function PostPage({
  allPostsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { siteTitle } = SiteConfig;

  return (
    <MainLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Banner src="/images/post-banner-test.jpg" alt="게시글 페이지 배너" />
      <PostsList allPostsData={allPostsData} pageType="게시글" />
    </MainLayout>
  );
}

export default PostPage;
