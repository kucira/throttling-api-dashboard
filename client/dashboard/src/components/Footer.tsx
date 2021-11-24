import React from 'react';
import { Flex, Text } from 'rebass';

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
      </Flex>
    </footer>
  );
};

export default React.memo(Footer);
