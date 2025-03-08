import styled from "styled-components";

export const ProfileContainer = styled.main`
  background-color: #0B1B2B;
  width: 100%; 
  max-width: 54rem;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden; 
  /* height: 13rem; */
  position: relative;
  top: -5.395rem;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: row;  
`

export const AvatarImg = styled.div`
  img {
    width: 9.25rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 2.5rem;
    margin-right: 2rem;
    border-radius: 8px;
  }
`

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
  max-width: 54rem;
`

export const NameAndGithub = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  align-items: center;
`

export const Name = styled.span`
  font-size: 1.5rem;
  font-weight: bold;  
  color: #E7EDF4;
  white-space: nowrap; 
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`

export const Github = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 0.5rem;
color: #3294F8;
margin-right: 2rem;
text-decoration: none;

  label {
    font-size: 0.75rem;
    font-weight: bold;
    cursor: pointer;
  }

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`

export const Bio = styled.span`
  font-size: 1rem;
  font-weight: 400; /* Regular */  
  color: #AFC2D4;
  margin-bottom: 1.5rem;
`

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-right: 2rem;
  margin-bottom: 1.9375rem;
  

  span {
    font-size: 1rem;
    font-weight: 400; /* Regular */  
    color: #C4D4E3;
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

  img {
    margin: 0; 
  }
`

export const Company = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    margin: 0; 
  }
`

export const Followers = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    margin: 0; 
  }
`

export const Loading = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 2.5rem;
  margin-right: 2rem;
  font-size: 1rem;
  font-weight: 400; /* Regular */  
  color: #AFC2D4;
  height: 13rem;;
`

