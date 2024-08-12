import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChakraProvider, Button, Box } from '@chakra-ui/react';
import FlashCard from './components/FlashCard';
import Nav from './components/Nav';
import AddFlashcard from './components/AddFlashcard';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Stats from './components/Stats';
const App = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const res = await axios.get('http://localhost:5000/');
        setFlashcards(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFlashcards();
  }, []);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <ChakraProvider>
      <div className='bg-black'>
      <Nav />
      <Hero />
      <Stats />
      <div className='flex justify-center mt-10'>
        <div className="indicator align-middle">
          <span className="indicator-item indicator-bottom badge badge-secondary"></span>
          <div className="bg-base-300 grid h-32 w-32 place-items-center"><p className='font-bold text-xl'>PLAY NOW</p></div>
        </div>
      </div>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
        {flashcards.length > 0 ? (
          <FlashCard
            id={flashcards[currentIndex].id}
            ques={flashcards[currentIndex].question}
            ans={flashcards[currentIndex].answer}
          />
        ) : (
          <p>Loading flashcards...</p>
        )}

        <Box mt={4}>
          <Button onClick={handlePrevious} isDisabled={currentIndex === 0}>
            Previous
          </Button>
          <Button onClick={handleNext} isDisabled={currentIndex === flashcards.length - 1} ml={2}>
            Next
          </Button>
        </Box>
      </Box>
      <AddFlashcard />
      <Footer />
      </div>
    </ChakraProvider>
  );
};

export default App;
