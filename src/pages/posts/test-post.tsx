import React from 'react';
import Head from 'next/head';
import Layout from '@components/layout';

export default function TestPost() {
  return (
    <Layout>
      <Head>
        <title>test post</title>
      </Head>
      <h1>test post</h1>
    </Layout>
  );
}
