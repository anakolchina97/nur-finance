import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>НурФинанс</title>
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
