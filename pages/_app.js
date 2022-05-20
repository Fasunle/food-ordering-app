import "../styles/globals.css";
import Nav from "../components/nav";
import Footer from "../components/Footer";

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
