import React, { useState, useCallback } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from '../components/Container';
import FetchButton from '../components/FetchButton';
import { fetchAPI } from './useHome';

const FetchButtonMemo = React.memo(FetchButton);

const SectionListAPI = () => {
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
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Header title="Header" />
      <Container>
        <SectionListAPI />
      </Container>
      <Footer content={`${new Date().getFullYear()}`} />
    </>
  );
};

export default Home;
