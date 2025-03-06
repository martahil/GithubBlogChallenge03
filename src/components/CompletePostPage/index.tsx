import backIcon from '../../assets/back-icon.svg'
import arrowSquareoutIcon from '../../assets/arrow-squareout-icon.svg'
import usernameIcon from '../../assets/username-icon.svg'
import calendarIcon from '../../assets/calendar-icon.svg'
import commentsIcon from '../../assets/comments-icon.svg'

import { Back, Calendar, Comments, CompletePostContainer, CompletePostContent, FirstLine, FirstSection, Github, GithubAndBack, Post, SecondSection, SecondSectionTitle, Summary, Text, ThirdSection, Title, TopInfo, Username } from "./styles";

export function CompletePostPage() {
  return (
    <CompletePostContainer>
      <CompletePostContent>
        <Summary>
          <GithubAndBack>
            <Back>
              <img src={backIcon} />
              <label>BACK</label>
            </Back>
            <Github>
              <label>GITHUB</label>
              <img src={arrowSquareoutIcon} />
            </Github>
          </GithubAndBack>

          <Title>JavaScript data types and data structures</Title>

          <TopInfo>
            <Username>
              <img src={usernameIcon} />
              <span>cameronwll</span>
            </Username>
            <Calendar>
              <img src={calendarIcon} />
              <span>1 day ago</span>
            </Calendar>
            <Comments>
              <img src={commentsIcon} />
              <span>5 comments</span>
            </Comments>
          </TopInfo>

        </Summary>

        <Post>
          <Text>
            <FirstSection>
              <FirstLine>
                Programming languages all have built-in data structures, but these often differ from one language to another.
              </FirstLine>
              This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.<br></br><br></br>
            </FirstSection>
            <SecondSectionTitle>Dynamic typing<br></br></SecondSectionTitle>
            <SecondSection>
              JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
            </SecondSection>
          </Text>
          <ThirdSection>
            <span style={{ color: '#80ABD6' }}>let</span> foo = <span style={{ color: '#6AD445' }}>42</span>;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4F6173' }}>// foo is now a number</span><br></br>
            foo = <span style={{ color: '#6AD445' }}>‘bar’</span>;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4F6173' }}>// foo is now a string</span><br></br>
            foo = <span style={{ color: '#6AD445' }}>true</span>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4F6173' }}>// foo is now a boolean</span><br></br>
          </ThirdSection>
        </Post>
      </CompletePostContent>
    </CompletePostContainer>
  )
}