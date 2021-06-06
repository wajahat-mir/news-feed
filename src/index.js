import React from "react";
import ReactDom from "react-dom";

import "./index.css";
import NewsFeed from "./NewsFeed";

ReactDom.render(
  <React.StrictMode>
    <NewsFeed />
  </React.StrictMode>,
  document.getElementById("root")
);
