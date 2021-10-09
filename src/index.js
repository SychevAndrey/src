import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://datahub.yc.pbd.ai:9002/api/grapiql',
    cache: new InMemoryCache()
});

client
    .query({
        query: gql`{
          dataset(urn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)") {
            status {
              removed
            }
    }
}
    `
    })
    .then(result => console.log(result));*/

ReactDOM.render(
  <React.StrictMode>
          <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
