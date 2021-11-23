import React from 'react';
import { Box } from 'theme-ui';

const Container: React.FC = (props) => {
  return (
    <Box
      bg={'black'}
      sx={{
        maxWidth: 1920,
        px: 3,
        py: 3,
        minHeight: '100vh',
      }}
    >
      {props.children}
    </Box>
  );
};

export default Container;
