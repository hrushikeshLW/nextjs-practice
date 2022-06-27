import { comments } from '../../../data/comments';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(comments);
  } else if (req.method === 'POST') {
    const comment = req.body.newComment;
    const data = {
      id: comments.length + 1,
      comment: comment,
    };
    comments.push(data);
    res.status(201).json(data);
  }
}
