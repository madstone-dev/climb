import { classNames } from '@/Utils/commons';
import React from 'react';
import Post from './Post';

export default function PostList({ data }) {
  const { current_page, data: posts, total } = data;
  console.log(posts);
  return (
    <div className="h-full">
      <h1 className="sr-only">최근 게시물</h1>
      <ul
        role="list"
        className={classNames(
          posts.length === 0 && 'h-full',
          'space-y-4 divide-y dark:divide-neutral-700',
        )}
      >
        {posts.length > 0 ? (
          posts.map((post, index) => <Post key={index} post={post} />)
        ) : (
          <div className="flex items-center justify-center h-full font-semibold">
            게시글이 없습니다
          </div>
        )}
      </ul>
    </div>
  );
}
