import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '@lib/posts';
import Date from '@components/common/Date';
import Layout from '@components/common/Layout';
import ImageTag from '@components/common/ImageTag';
import utilStyles from '@styles/utils.module.css';
import { PostsContainer } from './postsPageStyle';
import { SiteConfig } from '@config';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

function PostsPage({ allPostsData }) {
  const { siteTitle } = SiteConfig;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <ImageTag
          src="/images/post-banner.png"
          width={'1920px'}
          height={'560px'}
          alt="게시글 페이지 배너"
        />
      </section>

      <PostsContainer>
        <p>게시글</p>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
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
      </PostsContainer>
    </Layout>
  );
}

export default PostsPage;
