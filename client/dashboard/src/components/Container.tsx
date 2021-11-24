import React from 'react';
import { Box } from 'theme-ui';

const style = {
  maxWidth: 1920,
  px: 3,
  py: 3,
  minHeight: '100vh',
};

const Container: React.FC = (props) => {
  return (
    <Box bg={'black'} sx={style}>
      {props.children}
    </Box>
  );
};

export default Container;
