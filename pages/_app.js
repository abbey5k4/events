import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import appReducer from "../src/store/reducers";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logger = createLogger();
const store = createStore(appReducer, applyMiddleware(thunk, logger));

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Pace - Events</title>
        <meta name="description" content="Pace Events" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
