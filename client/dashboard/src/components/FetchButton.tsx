import React from 'react';
import { Button } from 'theme-ui';
import { Flex, Text } from 'rebass';

interface Props {
  title: string;
  status?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const style_flex = {
  whiteSpace: 'wrap',
};

const FetchButton: React.FC<Props> = (props: Props) => {
  const { title, onClick, status = 'Status' } = props;
  return (
    <Flex py={2} justifyContent={'space-between'} alignItems={'center'}>
      <Button variant="primary" onClick={onClick} data-testid="btn-fetch">
        {title}
      </Button>
      <Flex flex={2} sx={style_flex}>
        <Text mx={2} color={'white'}>
          {status}
        </Text>
      </Flex>
    </Flex>
  );
};

export default FetchButton;
