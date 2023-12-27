import { Stack, Typography } from '@mui/material';
import React from 'react';
import icon from '../assets/icons/gym.png';

interface Props {
  item: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  bodyPart: string;
}

const BodyParts = ({ item, setBodyPart, bodyPart }: Props) => {
  return (
    <Stack
      typography={'body1'}
      alignItems={'center'}
      justifyContent={'center'}
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #FF2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '170px',
        height: '180px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={icon}
        alt="dumb-bell"
        style={{ width: '40px', height: '40px' }}
      />
      <Typography fontWeight="bold" fontSize="24px" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyParts;
