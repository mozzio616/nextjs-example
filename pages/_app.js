import React from "react";
import Head from "next/head";

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'styles/globals.css'
import 'styles/tailwind.css'

function MyApp({Component, pageProps }) {

  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Example</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
  );
}


export default MyApp
