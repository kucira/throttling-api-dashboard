import React, { useState, useCallback } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from '../components/Container';
import FetchButton from '../components/FetchButton';

const FetchButtonMemo = React.memo(FetchButton);

const fetchAPI = async (
  endpoint: string,
  setState: React.Dispatch<
    React.SetStateAction<{
      status: string;
      response: null;
    }>
  >,
) => {
  let res: any = null;
  setState((prevState: any) => ({
    ...prevState,
    status: 'loading',
  }));

  const status = await fetch(endpoint);
  res = await status.json();
  if (status.ok) {
    setState((prevState: any) => ({
      ...prevState,
      status: 'success',
      response: endpoint === '/init' ? res.data[0].date : `id: ${res.data[0].id}, name: ${res.data[0].name},   address:${res.data[0].address}`,
    }));
    return;
  }
  setState((prevState: any) => ({
    ...prevState,
    status: 'error',
    response: JSON.stringify(res.error),
  }));
};

const Home: React.FC = () => {
  const [stateOne, setStateOne] = useState({
    status: 'init',
    response: null,
  });

  const [stateTwo, setStateTwo] = useState({
    status: 'init',
    response: null,
  });

  return (
    <>
      <Header title="Header" />
      <Container>
        <FetchButtonMemo
          title="Fetch API '/init'"
          status={stateOne.response || stateOne.status}
          onClick={useCallback(() => {
            fetchAPI('/init', setStateOne);
          }, [])}
        />
        <hr />
        <FetchButtonMemo
          title="Fetch API '/users'"
          status={stateTwo.response || stateTwo.status}
          onClick={useCallback(() => {
            fetchAPI('/users', setStateTwo);
          }, [])}
        />
        <hr />
      </Container>
      <Footer content={`${new Date().getFullYear()}`} />
    </>
  );
};

export default Home;
