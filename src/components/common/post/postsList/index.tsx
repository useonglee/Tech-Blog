import React, { useCallback, useEffect, useRef, useState } from 'react';
import PostCard from '@components/common/post/postCard';
import { AllPostsDataPropsType, PostDataType } from 'types/postsData';
import { PostsWrapper } from './style';

let end = 7;

function PostsList({ allPostsData, pageType }: AllPostsDataPropsType) {
  const pageEndRef = useRef<HTMLDivElement>(null);

  const [postsData, setPostsData] = useState<PostDataType[]>(
    allPostsData.slice(0, end),
  );

  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (end <= postsData.length) {
            end += 7;
            setPostsData(allPostsData.slice(0, end));

            observer.unobserve(pageEndRef.current);
          } else {
            return;
          }
        }
      });
    },
    [postsData],
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (pageEndRef.current) {
      observer = new IntersectionObserver(observerCallback, { threshold: 0.3 });
      observer.observe(pageEndRef.current);
    }

    return () => observer && observer.disconnect();
  }, [postsData]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <PostsWrapper pageType={pageType}>
      <p>{pageType}</p>
      <PostCard allPostsData={postsData} />
      <div className="page__end" ref={pageEndRef} />
    </PostsWrapper>
  );
}

export default PostsList;
