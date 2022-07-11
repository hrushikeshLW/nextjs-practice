import {news} from "../../../data/news.js";

export default function handler(req, res) {
  const {newsId} = req.query;
  const data = news.find((val) => val.id === parseInt(newsId));
  res.status(200).json(data);
}
