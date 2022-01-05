import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '@lib/posts';
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

function Posts({ allPostsData }) {
  const { siteTitle } = SiteConfig;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>끄적끄적</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>게시글</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
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

export default Posts;
