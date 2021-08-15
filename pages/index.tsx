import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import axios from '../utils/axios';

export default function Home({ projects }) {
  console.log(projects);

  return (
    <Fragment>
      <Head>
        <title>pherwerz | welcome</title>
      </Head>

      <section className="">
        <div className="container">
          <h1 className="display-1 text-center">home</h1>
          this is the hompage
        </div>
      </section>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('/v8/projects');

  return {
    props: {
      projects: res.data
    }
  };
};
