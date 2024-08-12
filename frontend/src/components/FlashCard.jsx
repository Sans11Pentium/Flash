import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Text, Button, Heading } from '@chakra-ui/react';
import UpdateFlashcard from './UpdateFlashCard';

export default function FlashCard({ id, ques, ans }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/${id}`);
      onDelete(id);  // Call a function to update your flashcards state after deletion
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card align='center' maxW='sm' boxShadow='md' borderWidth='1px'>
      <CardHeader>
        <Heading size='md'>Question id: {id}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{showAnswer ? ans : ques}</Text>
      </CardBody>
      <CardFooter>
        <Button onClick={toggleAnswer}>
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </Button>
        < Button>
           Update
        </Button>
        <Button onClick={handleDelete}>
           Delete 
        </Button>
      </CardFooter>
    </Card>
  );
}
