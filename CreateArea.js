import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    ticker: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      ticker: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="ticker"
          onChange={handleChange}
          value={note.ticker}
          placeholder="Enter ticker..."
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
