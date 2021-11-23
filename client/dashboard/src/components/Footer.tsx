import React from 'react';
import { Box, Flex, Text } from 'rebass';

interface FooterProps {
  content: string;
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { content } = props;
  return (
    <footer>
      <Flex color="white" bg="#4AA0E3" alignItems="center">
        <Text p={2} fontWeight="bold">
          {content}
        </Text>
        <Box mx="auto" />
        {/* <Link variant="nav" href="#!" color="white">
          Profile
        </Link> */}
      </Flex>
    </footer>
  );
};

export default Footer;
