import { Box } from '@mui/material';
import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { Exercise } from '../entities/Exercise';

const HomePage = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [bodyParts, setBodyParts] = useState('all');
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyParts}
        setBodyPart={setBodyParts}
      />
      <Exercises
        exercises={exercises}
        bodyParts={bodyParts}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default HomePage;
