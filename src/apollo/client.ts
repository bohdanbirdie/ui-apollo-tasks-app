import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

import { SyncStorage } from "../services/SyncStorage";
import { SessionMutations } from "../graphql/client/cache";

const cache = new InMemoryCache();

cache.writeData({
  data: {
    session: SyncStorage.getToken(),
  }
});

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

client.onResetStore(async () => {
  cache.writeData({
    data: {
      session: SyncStorage.getToken(),
    }
  })
});


export { cache, client };