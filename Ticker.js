import React from "react";

function Ticker(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.ticker}</h1>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Ticker;
