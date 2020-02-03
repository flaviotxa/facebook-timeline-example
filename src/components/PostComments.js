import React from 'react';

function PostComments({ comments }) {
  return (
    <div>
      <div className="divider" />
      <ul>
        {comments.map(comment => {
          return (
            <li key={comment.id}>
              <div className="post-comments">
                <img src={comment.author.avatar} className="avatar" />
                <div className="comment">
                  <p>
                    <span>{comment.author.name} </span>
                    {comment.content}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PostComments;
