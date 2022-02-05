import React from 'react';
import Link from 'next/link';
import { TagStyle } from './style';

interface TagPropsType {
  tags: string[];
  margin?: string;
}

function Tag({ tags, margin }: TagPropsType) {
  return (
    <TagStyle margin={margin}>
      {tags.map((tag) => (
        <Link key={tag} href="/">
          <a>{`#${tag}`}</a>
        </Link>
      ))}
    </TagStyle>
  );
}

export default Tag;
