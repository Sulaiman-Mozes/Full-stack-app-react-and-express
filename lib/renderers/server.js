import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from '../components/App';
import StateApi from '../StateApi';
import config from '../config';

const serverRender = async () => {
  const res = await axios.get(`${config.SERVER_URL}/data`);
  const store = new StateApi(res.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    initialData: res.data,
  };
};

export default serverRender;
