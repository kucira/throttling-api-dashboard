import React from 'react';
import { Flex, Text } from 'rebass';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { title } = props;
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
      }}
    >
      <Flex as="nav" color="white" bg="#4AA0E3" alignItems="center">
        <Text as="h2" p={2} fontWeight="bold">
          {title}
        </Text>
      </Flex>
    </header>
  );
};

export default React.memo(Header);
