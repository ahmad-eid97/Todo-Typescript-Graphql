// REACT STUFF
import React from 'react'
import ReactDOM from 'react-dom/client';
// REACT ROUTER STUFF
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
// COMPONENTS
import { RoutesSpinner } from './components';
// REACT TOASTER
import { Toaster } from 'react-hot-toast';
// APOLLO CLIENT STUFF
import { ApolloProvider } from '@apollo/client/react';
import client from './graphql';
// STYLES FILES
import './styles/global.scss';
import './styles/variables.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} fallbackElement={<RoutesSpinner />} />
    <React.StrictMode>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#f0edf1',
            boxShadow: '13px 13px 20px #cbced1, -13px -13px 20px #e3e3e3',
            color: '#394051',
          },
        }}
      />
    </React.StrictMode>
  </ApolloProvider>
)
