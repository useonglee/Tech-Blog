import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '@lib/getPosts';
import PostDetailLayout from '@components/common/layout/postDetail';
import Date from '@components/common/date';
import { PostDataPropsType, PostPageType } from 'types/postsData';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as PostPageType;
  const postData = await getPostData(id, 'post');

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds('post');

  return {
    paths,
    fallback: false,
  };
};

function PostDetailPage({ postData }: PostDataPropsType) {
  return (
    <PostDetailLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>{postData.title}</h1>
      <div>
        <Date dateString={postData.date} />
        <span>
          {postData.tags.map((tag) => (
            <Link key={tag} href="/">
              <a>{`#${tag}`}</a>
            </Link>
          ))}
        </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </PostDetailLayout>
  );
}

export default PostDetailPage;
