import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '@lib/review';
import Date from '@components/date';
import Layout from '@components/layout';
import utilStyles from '@styles/utils.module.css';
import { SiteConfig } from '@config';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

function Review({ allPostsData }) {
  const { siteTitle } = SiteConfig;

  return (
    <Layout home>
      <Head>
        <link rel="stylesheet" href="../styles/font.css" />
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>프론트엔드 업무를 하면서 기록하고 싶은 내용을 기록합니다</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>업무 회고</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/review/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
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
