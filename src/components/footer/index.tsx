import React from 'react';
import { FooterStyle } from './style';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterStyle>
      <p>Copyright © {year} 이우성 기술블로그 All rights reserved.</p>
    </FooterStyle>
  );
}

export default Footer;
