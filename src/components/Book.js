import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

export default function Book(props) {
  const book = props;
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <div className="book">
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.author}</div>
      <button type="button" onClick={removeBook}>
        Remove
      </button>
    </div>
  );
}
