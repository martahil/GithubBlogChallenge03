import styled from 'styled-components'

export const SearchContainer = styled.main`
  input {
    font-size: 1rem;
    font-weight: 400; /* Regular */
    color: #3A536B;
    background-color: #040F1A;
    border-radius: 6px;
    border: 1px solid #1C2F41;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    margin-top: 0.75rem;
    width: 100%;
    max-width: 54rem;
  }

  input::placeholder {
    font-size: 1rem;
    font-weight: 400; /* Regular */
    color: #3A536B;
  }  
`

export const SearchContent = styled.div`
  width: 100%; 
  max-width: 54rem;
  margin: 0 auto;
`

export const SearchTitleAndCounter = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SearchHeader = styled.span`
  font-size: 1.125rem;
  font-weight: bold;
  color: #C4D4E3;
`

export const PostsCounter = styled.span`
  font-size: 0.875rem; 
  font-weight: 400; /* Regular */
  color: #7B96B2;
`

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);  
  gap: 2rem;
  margin-top: 3rem;  
  margin-bottom: 14.625rem;
`

export const IndividualPost = styled.div`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  background: #112131;
  border-radius: 10px;
  align-items: flex-start;
  overflow: hidden; 
  cursor: pointer;

  :link {
    text-decoration: none;
  }
`

export const PostTitleAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
  `

export const PostTitle = styled.span`
  font-size: 1.25rem;
  font-weight: bold; 
  color: #E7EDF4;
`

export const PostDate = styled.span`
  margin-top: 0.3125rem;
  font-size: 0.875rem;
  font-weight: 400; /* Regular */
  color: #7B96B2;
  white-space: nowrap; 
`

export const PostContent = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* line limit */
  overflow: hidden;

  font-size: 1rem;
  font-weight: 400; /* Regular */
  color: #AFC2D4;
  align-items: flex-start;  
  line-height: 2rem;
`

export const IndividualPostTxt = styled.div`
  p strong {
    font-weight: 400;
  }
`





