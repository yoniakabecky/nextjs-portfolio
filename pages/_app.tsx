import { AnimateSharedLayout } from "framer-motion";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import BasicMeta from "../components/meta/BasicMeta";
import theme from "../styles/theme";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BasicMeta />

      <ThemeProvider theme={theme}>
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </ThemeProvider>
    </>
  );
}
