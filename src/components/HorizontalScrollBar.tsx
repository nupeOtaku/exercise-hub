import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import BodyParts from './BodyParts';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

interface Props {
  data: [];
  id: string;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }: Props) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
          component={'div'}
        >
          <BodyParts
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
