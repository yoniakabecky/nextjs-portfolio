import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import BasicMeta from "../components/meta/BasicMeta";
import GoogleFontsMeta from "../components/meta/GoogleFontsMeta";
import GlobalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BasicMeta />
      <GoogleFontsMeta />

      <GlobalStyles />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
