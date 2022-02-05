import React from 'react';
import MainLayout from '@components/common/layout/main';
import Banner from '@components/common/banner';

function HomePage() {
  return (
    <MainLayout>
      <Banner src="/images/post-banner-test.jpg" alt="메인 페이지 배너" />
      <div>안녕하세요. 이우성 기술블로그 입니다.</div>
    </MainLayout>
  );
}

export default HomePage;
