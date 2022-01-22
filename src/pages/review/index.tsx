import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '@lib/review';
import Date from '@components/common/date';
import Layout from '@components/layout';
import { AllPostsDataPropsType, PostDataType } from 'types/postsData';
import { SiteConfig } from '@config';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

function Review({ allPostsData }: AllPostsDataPropsType) {
  const { siteTitle } = SiteConfig;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>프론트엔드 업무를 하면서 기록하고 싶은 내용을 기록합니다</p>
      </section>

      <section>
        <h2>업무 회고</h2>
        <ul>
          {allPostsData.map(({ id, date, title }: PostDataType) => (
            <li key={id}>
              <Link href={`/review/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default Review;
