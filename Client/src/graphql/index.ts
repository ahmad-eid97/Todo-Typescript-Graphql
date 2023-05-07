import { ApolloClient, InMemoryCache } from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";

const link = createUploadLink({
  uri: 'http://localhost:9999/graphql',
  credentials: 'include',
  headers: {
    'Apollo-Require-Preflight': 'true' //==> Enables file uploads
  }
})

export const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://localhost:9999/graphql",
  link,
  cache: cache,
  credentials: 'include',
  connectToDevTools: true
});

export default client;