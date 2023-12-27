import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, exerciseUrl, fetchData } from '../utils/fetchData';
import { useQuery } from '@tanstack/react-query';
import HorizontalScrollBar from './HorizontalScrollBar';
import { Exercise } from '../entities/Exercise';

interface Props {
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  bodyPart: string;
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

const SearchExercises = ({ setBodyPart, bodyPart, setExercises }: Props) => {
  const [search, setSearch] = useState<string>('');
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  const { data } = useQuery<string[]>({
    queryKey: ['exercises'],
    queryFn: () => fetchData(`${exerciseUrl}/bodyPartList`, exerciseOptions),
  });

  useEffect(() => {
    setBodyParts(['all', ...(data || [])]);
  }, [data]);
  console.log(bodyParts);

  const handleSearch = async () => {
    if (search) {
      const exercises: Exercise[] = await fetchData(
        `${exerciseUrl}`,
        exerciseOptions
      );

      const searchedExercises = exercises.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems={'center'} p="20px" justifyContent={'center'} mt={'37px'}>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position={'relative'} mb={'72px'}>
        <TextField
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
            height: '76px',
          }}
          placeholder="Search Exercises"
          type="text"
          value={search}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            height: '56px',
            position: 'absolute',
            right: '0px',
            fontSize: { lg: '20px', xs: '14px' },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          data={bodyParts}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
