import Link from 'next/link';
import ImageTag from '@components/common/ImageTag';
import ThemeSwitch from '@components/ThemeSwitch';
import { HeaderRightContent, HeaderStyle, LogoBox } from './headerStyle';
import { SiteConfig } from '@config';

function Header() {
  const { name } = SiteConfig;

  return (
    <HeaderStyle>
      <LogoBox>
        <Link href="/">
          <a>
            <ImageTag
              src="/images/profile.jpg"
              width="58px"
              height="58px"
              circle="true"
              alt="프로필 사진"
            />
          </a>
        </Link>
        <h2>
          <Link href="/">
            <a>{name}</a>
          </Link>
        </h2>
      </LogoBox>
      <HeaderRightContent>
        <>
          {SiteConfig.menu.map((link) => (
            <Link key={link.label} href={link.path}>
              {link.label}
            </Link>
          ))}
        </>
        <ThemeSwitch />
      </HeaderRightContent>
    </HeaderStyle>
  );
}

export default Header;
