import axios from 'axios';
import React from 'react';

const DeleteFlashCard = ({ id, ques, ans, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/${id}`);
      onDelete(id);  // Call a function to update your flashcards state after deletion
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>{ques}</h3>
      <p>{ans}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteFlashCard;
