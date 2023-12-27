import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const SearchExercises = () => {
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
          onChange={() => {}}
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
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
