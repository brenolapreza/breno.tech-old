import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import client from "../service/apollo/apollo-client";
import { GlobalStyle } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
