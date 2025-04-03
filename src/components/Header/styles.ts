import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 18.5rem;
  background: #0C2135;
`

export const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;  
  flex-direction: column;
  margin-top: 4rem;

  img {
    width: 2.8125rem;
    padding-bottom: 1.25rem;
  }

  span {    
    font-family: 'Coda';
    font-size: 1.5rem;
    font-weight: 400; /* Regular */
    color: #3294F8;
    white-space: nowrap; 
  }
`

export const HeaderLeftEffect = styled.div`
  img {
    width: 25.5625rem;
    height: 11.75rem;
    margin-top: 4.375rem;
    margin-left: 0rem;
  }
`

export const HeaderRightEffect = styled.div`
  img {
    width: 23.1875rem;
    height: 14.75rem;
    margin-top: 1.875rem;
    margin-right: 0.125rem;
  }
`