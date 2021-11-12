import Head from "next/head";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Urika Insights</title>
        <meta name="description" content="Website for Urika Insights" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
