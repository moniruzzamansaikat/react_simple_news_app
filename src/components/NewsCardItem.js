import React from "react";
import ReactTimeAgo from "react-time-ago";
import { BiTime } from "react-icons/bi";

function NewsItems({ article }) {
  // if no image for card then return
  if (!article.urlToImage) return <></>;

  return (
    <div className="card p-2 ">
      <img src={article.urlToImage} alt="" />
      <p className="my-2">
        <a href={article.url} className="news_card_link" target="_blank" rel="noreferrer">
          {article.title}
        </a>
      </p>
      <p>
        <BiTime className="me-2 mb-1" />
        <ReactTimeAgo date={article.publishedAt} locale="en-US" timeStyle="twitter" />
      </p>
    </div>
  );
}

export default NewsItems;
