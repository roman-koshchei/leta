import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

import type { AppProps } from "next/app";

const LetaApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
}

export default LetaApp
