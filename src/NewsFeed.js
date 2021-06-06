import React from "react";

import { newsItems } from "./newsItems";
import NewsItem from "./components/NewsItem";

function NewsFeed() {
  return (
    <>
      <section>
        <h1 className="title">Today's news</h1>
      </section>
      <br />
      <section>
        {newsItems.map((newsItem) => {
          return <NewsItem key={newsItem.id} {...newsItem} />;
        })}
      </section>
    </>
  );
}

export default NewsFeed;
