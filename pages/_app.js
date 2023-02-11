//use this component to keep state when navigating between pages, or to add global styles
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
