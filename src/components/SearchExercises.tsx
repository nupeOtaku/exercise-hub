import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const SearchExercises = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = async () => {
    if (search) {
      const exercises = await fetch(`/search/${search}`);
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
          value=""
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
          onClick={HandleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
