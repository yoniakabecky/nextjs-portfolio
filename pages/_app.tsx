import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GoogleFontsMeta from "../components/meta/GoogleFontsMeta";
import GlobalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleFontsMeta />

      <GlobalStyles />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
