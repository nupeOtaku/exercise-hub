import React from 'react';
import { Exercise } from '../entities/Exercise';

interface Props {
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  bodyPart: string;
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

const Exercises = ({ setBodyPart, bodyPart, setExercises }: Props) => {
  return <div>Exercise</div>;
};

export default Exercises;
