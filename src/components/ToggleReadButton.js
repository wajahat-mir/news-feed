import React, { useState } from "react";

export default function ToggleReadButton() {
  const [readState, setReadState] = useState(false);

  const handleClick = () => {
    readState === true ? setReadState(false) : setReadState(true);
  };

  return (
    <>
      <p>The article has been {readState === true ? "read" : "unread"}</p>
      <button type="button" onClick={handleClick}>
        Mark As Read
      </button>
    </>
  );
}
