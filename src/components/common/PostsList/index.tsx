import React from 'react';
import Link from 'next/link';
import Date from '@components/common/Date';
import { AllPostsDataPropsType, PostDataType } from 'types/postsData';
import { PostItem, PostsWrapper } from './PostsListStyle';

function PostsList({ allPostsData }: AllPostsDataPropsType) {
  return (
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
  );
}

export default PostsList;
