import React from 'react';
import Layout from '@components/common/layout';
import Banner from '@components/common/banner';

function HomePage() {
  return (
    <Layout home>
      <Banner src="/images/post-banner-test.jpg" alt="메인 페이지 배너" />
      <div>안녕하세요. 이우성 기술블로그 입니다.</div>
    </Layout>
  );
}

export default HomePage;
