import React from 'react';
import Link from 'next/link';
import Date from '@components/common/date';
import ImageTag from '@components/common/imageTag';
import Tag from '@components/common/tag';
import { AllPostsDataPropsType, PostDataType } from 'types/postsData';
import { PostCardWrapper } from './postCardStyle';

function PostCard({ allPostsData }: AllPostsDataPropsType) {
  return (
    <ul>
      {allPostsData.map((post: PostDataType) => (
        <PostCardWrapper key={post.id}>
          <ImageTag
            src={post.thumbnail}
            width={170}
            height={170}
            alt="게시글 썸네일"
          />
          <div>
            <Tag tags={post.tags} margin="15px" />
            <Link href={`/${post.layout}/${post.id}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.subTitle}</p>
            <Date dateString={post.date} />
          </div>
        </PostCardWrapper>
      ))}
    </ul>
  );
}

export default PostCard;
