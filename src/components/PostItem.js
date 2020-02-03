import React from 'react';

import PostHeader from './PostHeader';
import PostComments from './PostComments';

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p>{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;
