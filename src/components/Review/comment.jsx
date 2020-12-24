import React, { useState } from "react";
// import "../App.css"

function CreateComment(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  const handleKeypress = (e) => {
    if (e.keycode === 13) {
      submitNote();
    }
  };

  return (
    <div className="teks-area reviews-form">
      <form className="">
        <input
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="add a review..."
          rows="3"
          oneKeyPress={handleKeypress}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateComment;
