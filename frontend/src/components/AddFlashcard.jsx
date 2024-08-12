import axios from 'axios';
import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

const AddFlashcard = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/add', {
        question,
        answer
      });
      // Refresh or update your flashcards state here if needed
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="card bg-base-100 image-full w-96 shadow-xl m-auto">
        <figure>
          <img
            src="https://img.freepik.com/free-vector/gradient-technology-symbols-background_23-2149110134.jpg"
            alt="Shoes" />
        </figure>
        <div className="card-body">
        <p className='text-2xl font-bold my-10 ml-10 text-teal-400'>Add your flash Card</p>
          <form onSubmit={handleSubmit}>
            <input
              className="input input-bordered w-full max-w-xs mb-4"
              type="text"
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <input
              type="text"
              className="input input-bordered w-full max-w-xs mb-4"
              placeholder="Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <Button colorScheme='teal' size='md'>Add Flashcard</ Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFlashcard;
