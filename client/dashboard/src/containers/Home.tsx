import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from '../components/Container';
import FetchButton from '../components/FetchButton';

interface StateResponse {
  status: string;
  response: null;
}

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
      response: JSON.stringify(res),
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
  const [state, setState] = useState({
    status: 'init',
    response: null,
  });

  return (
    <>
      <Header title="Header" />
      <Container>
        <FetchButton title="Fetch API '/init'" status={state.response || state.status} onClick={() => fetchAPI('/init', setState)} />
        <hr />
        <FetchButton title="Fetch API '/users'" status={state.response || state.status} onClick={() => fetchAPI('/users', setState)} />
        <hr />
      </Container>
      <Footer content={`${new Date().getFullYear()}`} />
    </>
  );
};

export default Home;
