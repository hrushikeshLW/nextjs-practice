import { useState } from 'react';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const fetchData = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    console.log(data);
    setComments(data);
  };
  const submitData = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ newComment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <input
        type='text'
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={submitData}>Submit comment</button>&nbsp;
      <button onClick={fetchData}>Load comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>
            {comment.id}| {comment.comment}
          </p>
        </div>
      ))}
    </>
  );
};
export default CommentList;
