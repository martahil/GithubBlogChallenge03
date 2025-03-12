import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext'
import { UserContext } from '../../contexts/UserContext'
import backIcon from '../../assets/back-icon.svg'
import arrowSquareoutIcon from '../../assets/arrow-squareout-icon.svg'
import usernameIcon from '../../assets/username-icon.svg'
import calendarIcon from '../../assets/calendar-icon.svg'
import commentsIcon from '../../assets/comments-icon.svg'
import { Back, Calendar, Comments, CompletePostContainer, CompletePostContent, FirstLine, FirstSection, Github, GithubAndBack, NoPostMessage, Post, SecondSection, SecondSectionTitle, Summary, Text, ThirdSection, Title, TopInfo, Username } from "./styles";

export function CompletePostPage() {
  const { postId } = useParams()
  const { posts } = useContext(PostsContext)
  const { user } = useContext(UserContext)

  const currentPost = posts.find(p => p.number === Number(postId));

  const postedDate = new Date(currentPost.created_at);
  const timeAgoInMinutes = (new Date().getTime() - postedDate.getTime()) / 1000 / 60;
  let timeAgo = "now";

  if (timeAgoInMinutes < 60) {
    timeAgo = "now";
  } else if (timeAgoInMinutes < 60 * 24) {
    const hours = Math.floor(timeAgoInMinutes / 60);
    timeAgo = `${hours}h ago`;
  } else if (timeAgoInMinutes < 60 * 24 * 7) {
    const days = Math.floor(timeAgoInMinutes / (60 * 24));
    timeAgo = `${days}d ago`;
  } else if (timeAgoInMinutes < 60 * 24 * 30) {
    const weeks = Math.floor(timeAgoInMinutes / (60 * 24 * 7));
    timeAgo = `${weeks}w ago`;
  } else if (timeAgoInMinutes < 60 * 24 * 365) {
    const months = Math.floor(timeAgoInMinutes / (60 * 24 * 30));
    timeAgo = `${months}m ago`;
  } else {
    const years = Math.floor(timeAgoInMinutes / (60 * 24 * 365));
    timeAgo = `${years}y ago`;
  }

  return (
    <CompletePostContainer>
      <CompletePostContent>

        <Summary>
          <GithubAndBack>
            <Back as="a" href='/' rel="noopener noreferrer">
              <img src={backIcon} />
              <label>BACK</label>
            </Back>
            <Github as="a" href={user.html_url} target="_blank" rel="noopener noreferrer">
              <label>GITHUB</label>
              <img src={arrowSquareoutIcon} />
            </Github>
          </GithubAndBack>

          <Title>{currentPost.title}</Title>

          <TopInfo>
            <Username>
              <img src={usernameIcon} />
              <span>{user?.login ?? "Unknown user"}</span>
            </Username>
            <Calendar>
              <img src={calendarIcon} />
              <span>{timeAgo}</span>
            </Calendar>
            <Comments>
              <img src={commentsIcon} />
              <span>{currentPost.comments === 1 || currentPost.comments === 0 ? `${currentPost.comments} comment` : `${currentPost.comments} comments`}
              </span>
            </Comments>
          </TopInfo>
        </Summary>

        <Post>
          <Text>
            {!currentPost ? (
              <NoPostMessage>Post not found.</NoPostMessage>
            ) : (
              <>
                {currentPost.body}
              </>
            )}
          </Text>
          {/* <FirstSection>
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
          </ThirdSection> */}
        </Post>
      </CompletePostContent>
    </CompletePostContainer>
  )
}