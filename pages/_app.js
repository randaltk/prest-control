import React, { useState, useRef, useEffect } from "react";
import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";
import Head from "next/head";
import posthog from "posthog-js";

// Components

import Header from "../components/Header";
import Backdrop from "../components/Backdrop";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

function MyApp({ Component, pageProps }) {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <>
      <Head>
        <title>Prest-Control | Equipamentos Hidráulicos de Alta Pressão</title>
      </Head>

      <main className={styles.bodyContent}>
        <Topbar />
        <Header click={() => setSideToggle(true)} />
        {posthog.has_opted_out_capturing() ||
        posthog.has_opted_in_capturing() ? null : (
          <CookieBanner />
        )}

        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default MyApp;
