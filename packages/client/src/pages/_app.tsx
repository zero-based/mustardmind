import { ChakraProvider } from "@mustardmind/mauinz";
import { ApolloProvider } from '@apollo/client';
import { client } from "../client";
import { Global } from "@emotion/react";
import { fonts } from "@mustardmind/mauinz";
import { theme } from '@mustardmind/mauinz';
import { NavBarContainer } from "../components/NavBar.container"
import { INvaBarTextProps } from "src/components/NavBarItem";

function MyApp({ Component, pageProps }) {

  const navBarItems: INvaBarTextProps[] =
    [
      { name: "Sign Up", to: "/sign-up" },
      { name: "Sign in", to: "/sign-in" },
      { name: "Dashboard", to: "/dashboard" }
    ];

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Global styles={fonts} />
        <NavBarContainer items={navBarItems} />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp