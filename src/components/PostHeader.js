import React from 'react';

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img src={author.avatar} className="avatar" />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

export default PostHeader;
