import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../utils/muiTheme";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>
          URIKA Insights: Leading Market And Social Research Company In Ghana
        </title>
        <meta name="description" content="Website for Urika Insights" />
        <link rel="icon" href="/icon.jpg" />
      </Head>

      <ThemeProvider theme={muiTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
