import React from "react";

import Headline from "./Headline";
import Body from "./Body";
import ToggleReadButton from "./ToggleReadButton";

function NewsItem({ title, text }) {
  return (
    <article className="newsItem">
      <Headline title={title} />
      <Body text={text} />
      <ToggleReadButton />
    </article>
  );
}

export default NewsItem;
