import { HeaderContainer, HeaderLeftEffect, HeaderRightEffect, LogoAndTitle } from "./styles";
import logoHeader from '../../assets/header-logo.svg'
import headerLeftEffect from '../../assets/header-effect-left.svg'
import headerRightEffect from '../../assets/header-effect-right.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLeftEffect>
        <img src={headerLeftEffect} />
      </HeaderLeftEffect>

      <LogoAndTitle>
        <img src={logoHeader} />
        <span>GITHUB BLOG</span>
      </LogoAndTitle>

      <HeaderRightEffect>
        <img src={headerRightEffect} />
      </HeaderRightEffect>
    </HeaderContainer>
  )
}