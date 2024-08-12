import axios from 'axios';
import React, { useState } from 'react';

const UpdateFlashcard = ({ id, currentQuestion, currentAnswer }) => {
  const [question, setQuestion] = useState(currentQuestion);
  const [answer, setAnswer] = useState(currentAnswer);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/${id}`, {
        question,
        answer
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type="submit">Update Flashcard</button>
    </form>
  );
};

export default UpdateFlashcard;
