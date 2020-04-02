import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { ApolloLink } from 'apollo-link';

import { SyncStorage } from "../services/SyncStorage";
import { SessionMutations } from "../graphql/client/cache";
import { LOGOUT } from './../graphql/client/cache';

const cache = new InMemoryCache();

cache.writeData({
  data: {
    session: SyncStorage.getToken(),
  }
});

const httpLink = createHttpLink({
  uri: "https://apple-cake-68011.herokuapp.com/graphql"
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    ...SyncStorage.getAuthHeader()
  }
}));

const errorLink = onError(({ networkError, graphQLErrors = [], operation }) =>{
  const { response } = operation.getContext()

  const unauthorized = graphQLErrors.find((error) => {
    return error?.extensions?.exception?.response?.statusCode === 401;
  })

  if (response?.status === 401 || unauthorized) {
    client.mutate({ mutation: LOGOUT }).catch()
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache,
  resolvers: {
    Mutation: {
      ...SessionMutations
    }
  }
});

client.onResetStore(async () => {
  cache.writeData({
    data: {
      session: SyncStorage.getToken(),
    }
  })
});


export { cache, client };