import React from 'react';
import Link from 'next/link';
import Date from '@components/common/date';
import ImageTag from '@components/common/imageTag';
import { AllPostsDataPropsType, PostDataType } from 'types/postsData';
import { PostItem, PostsWrapper } from './PostsListStyle';

function PostsList({ allPostsData, pageType }: AllPostsDataPropsType) {
  return (
    <PostsWrapper pageType={pageType}>
      <p>{pageType}</p>
      <ul>
        {allPostsData.map(
          ({ id, layout, title, subTitle, date, thumbnail }: PostDataType) => (
            <PostItem key={id}>
              <ImageTag
                src={thumbnail}
                width={'170'}
                height={'170'}
                alt="게시글 썸네일"
              />
              <div>
                <div>#블로그 #태그</div>
                <Link href={`/${layout}/${id}`}>
                  <a>{title}</a>
                </Link>
                <p>{subTitle}</p>
                <Date dateString={date} />
              </div>
            </PostItem>
          ),
        )}
      </ul>
    </PostsWrapper>
  );
}

export default PostsList;
