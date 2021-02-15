import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux'

import client from 'services/graphql/index';
import { useStore } from 'redux/store';


function MyApp({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState)
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>)
}

export default MyApp
