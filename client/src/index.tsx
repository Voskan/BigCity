import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import reportWebVitals from './reportWebVitals';
import { Listings } from './sections';

import "./styles/index.css";

const client = new ApolloClient({
  uri: "/api"
});

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Listings title="BigCity Listings" />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
