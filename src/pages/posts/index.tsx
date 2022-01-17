import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '@lib/posts';
import Date from '@components/common/Date';
import Layout from '@components/common/Layout';
import Banner from '@components/common/Banner';
import { PostItem, PostsWrapper } from './postsPageStyle';
import { SiteConfig } from '@config';
import { AllPostsDataPropsType, PostDataType } from 'types/postsData';

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
      <PostsWrapper>
        <p>게시글</p>
        <ul>
          {allPostsData.map(({ id, date, title }: PostDataType) => (
            <PostItem key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <p>
                <Date dateString={date} />
              </p>
            </PostItem>
          ))}
        </ul>
      </PostsWrapper>
    </Layout>
  );
}

export default PostsPage;
