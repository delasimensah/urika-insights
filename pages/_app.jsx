import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(import("react-modal-video"), { ssr: false });

import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../utils/muiTheme";

import "react-modal-video/css/modal-video.min.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>
          URIKA Insights: Leading Market And Social Research Company In Ghana
        </title>
        <meta name="description" content="Website for Urika Insights" />
        <link rel="icon" href="/icon.jpg" />
      </Head>

      <ModalVideo
        channel="youtube"
        autoplay
        showinfo={false}
        isOpen={isOpen}
        videoId="pqb6IEOmdyk"
        onClose={() => setOpen(false)}
      />

      <ThemeProvider theme={muiTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
