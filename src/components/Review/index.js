import React, { useState } from "react";
import Comment from "./comment"
import Review from "./review"
import Rating from "./starRating"
import CommentReview from "./cardData"
import Komentar from "./fetchTest"
import LoadMore from "./loadMore";
import "./assets/App.css"

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
    <div>
      <Rating />
      <Comment onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Review
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
    <Komentar />
    <LoadMore />
    </>
  );
}

export default App;