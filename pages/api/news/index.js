import {news} from "../../../data/news.js";

export default function handler(req, res) {
  res.status(200).json(news);
}
