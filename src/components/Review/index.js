import React, { useState, useEffect } from "react";
// import Comment from "./comment"
// import Review from "./review"
// import Rating from "./starRating"
// import CommentReview from "./cardData"
// import Komentar from "./fetchTest"
// import LoadMore from "./loadMore";
import Comment from "components/Review/comment"
import Review from "components/Review/review";
import Rating from "components/Review/starRating";
import Komentar from "components/Review/fetchTest"
import LoadMore from "components/Review/loadMore";


import "./assets/App.css"

function App(props) {
  console.log(props, "dummy2x")
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
  useEffect(() => {}, [props.dummy.rating]);
  return (
    <>
      <div>
        <Rating dummy={props.dummy} dummy2={props.dummy2} />
        <Comment onAdd={addNote} />
        {/* {props.dummy.rating !== 0
          ? notes.map((noteItem, index) => {
              return (
                <Review
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
              );
            })
          : null} */}
      </div>
      <Komentar
        dummy={props.dummy}
        dummy2={props.dummy2}
        comment={props.comment}
        loading={props.loading}
      />
      <LoadMore />
    </>
  );
}

export default App;