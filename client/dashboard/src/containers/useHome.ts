export const fetchAPI = async (
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
