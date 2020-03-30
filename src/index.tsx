import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { BrowserRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import App from "./App";
import { cache } from "./store/cache";
import { SyncStorage } from "./services/SyncStorage";
import { SessionMutations } from "./graphql/client/cache";

import "antd/dist/antd.css";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql"
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    ...SyncStorage.getAuthHeader()
  }
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {
    Mutation: {
      ...SessionMutations
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
