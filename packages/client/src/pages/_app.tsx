import { ChakraProvider } from "@mustardmind/mauinz";
import { ApolloProvider } from '@apollo/client';
import { client } from "../client";
import { Global } from "@emotion/react";
import { fonts } from "@mustardmind/mauinz";
import { theme } from '@mustardmind/mauinz';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Global styles={fonts} />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp