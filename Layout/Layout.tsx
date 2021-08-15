import Head from 'next/head';
import { FC, Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>pherwerz</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
