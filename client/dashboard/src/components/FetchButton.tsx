import React from 'react';
import { Button } from 'theme-ui';
import { Flex, Text } from 'rebass';

interface Props {
  title: string;
  status?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FetchButton: React.FC<Props> = (props: Props) => {
  const { title, onClick, status = 'Status' } = props;
  return (
    <Flex py={2} justifyContent={'space-between'} alignItems={'center'}>
      <Button variant="primary" onClick={onClick}>
        {title}
      </Button>
      <Text color={'white'}>{status}</Text>
    </Flex>
  );
};

export default FetchButton;
