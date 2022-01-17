import React from 'react';
import Head from 'next/head';
import Layout from '@components/common/Layout';

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
