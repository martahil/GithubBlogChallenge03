import styled from "styled-components"

export const CompletePostContainer = styled.main`
`

export const CompletePostContent = styled.div`
`

export const Summary = styled.div`
  background-color: #0B1B2B;
  width: 100%; 
  max-width: 54rem;
  margin: 0 auto;
  border-radius: 10px;
  height: 10.5rem;
  position: relative;
  top: -5.395rem;
  padding: 2rem;
`

export const GithubAndBack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #3294F8;
  font-size: 0.75rem;
  font-weight: bold;
`

export const Back = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  color: #3294F8;

  label {
    cursor: pointer;
  }

  &:hover {
    text-decoration: none;
  }

  img {
    width: 0.75rem;
    height: 0.75rem;
  }
`

export const Github = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  cursor: pointer;  
  color: #3294F8;

  label {
    cursor: pointer;
  }
  
  &:hover {
    text-decoration: none;
  }

  img {
    width: 0.75rem;
    height: 0.75rem;
  }
`

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;  
  color: #E7EDF4;
  white-space: nowrap; 
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
`

export const TopInfo = styled.div`
  display: flex;
  gap: 2rem;

  span {
    font-size: 1rem;
    font-weight: 400; /* Regular */  
    color: #7B96B2;
    white-space: nowrap; 
  }

  img {
    width: 1.125rem;
  }  
`

export const Username = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Calendar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Comments = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Post = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%; 
  max-width: 54rem;
  margin: 0 auto;
  
  position: relative;
  top: -5.395rem;

  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
`

export const FirstSection = styled.span`
`

export const FirstLine = styled.span`
  font-weight: bold;
`

export const SecondSectionTitle = styled.span`
  color: #3294F8;
  text-decoration: underline;
`

export const SecondSection = styled.span`
`

export const ThirdSection = styled.div`
  background: #112131; 
  padding: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  font-family: 'Fira Code', monospace;
`

export const NoPostMessage = styled.p`
  font-size: 1rem;
  font-weight: 400; /* Regular */  
  color: #AFC2D4;
`

export const StyledMarkdown = styled.div`
  p {
    font-size: 1rem;
    font-weight: 400;
    color: #afc2d4;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 400;
    color: #3294f8;
    text-decoration: underline;
  }

  h1:has(+ pre) {
    margin-bottom: 1.5rem; 
  }

  li {
    margin-left: 1.3rem;
  }

  li:last-child {
    margin-bottom: 1.5rem;
  }
`;