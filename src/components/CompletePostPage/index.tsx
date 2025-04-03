import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PostsContext } from '../../contexts/PostsContext'
import { UserContext } from '../../contexts/UserContext'
import backIcon from '../../assets/back-icon.svg'
import arrowSquareoutIcon from '../../assets/arrow-squareout-icon.svg'
import usernameIcon from '../../assets/username-icon.svg'
import calendarIcon from '../../assets/calendar-icon.svg'
import commentsIcon from '../../assets/comments-icon.svg'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Back, Calendar, Comments, CompletePostContainer, CompletePostContent, Github, GithubAndBack, NoPostMessage, Post, StyledMarkdown, Summary, Title, TopInfo, Username } from './styles'

export function CompletePostPage() {
  const { postId } = useParams()
  const { posts } = useContext(PostsContext)
  const { user } = useContext(UserContext)

  const currentPost = posts.find(p => p.number === Number(postId))

  const postedDate = new Date(currentPost.created_at)
  const timeAgoInMinutes = (new Date().getTime() - postedDate.getTime()) / 1000 / 60
  let timeAgo = 'now'

  if (timeAgoInMinutes < 60) {
    timeAgo = 'now'
  } else if (timeAgoInMinutes < 60 * 24) {
    const hours = Math.floor(timeAgoInMinutes / 60)
    timeAgo = `${hours}h ago`
  } else if (timeAgoInMinutes < 60 * 24 * 7) {
    const days = Math.floor(timeAgoInMinutes / (60 * 24))
    timeAgo = `${days}d ago`
  } else if (timeAgoInMinutes < 60 * 24 * 30) {
    const weeks = Math.floor(timeAgoInMinutes / (60 * 24 * 7))
    timeAgo = `${weeks}w ago`
  } else if (timeAgoInMinutes < 60 * 24 * 365) {
    const months = Math.floor(timeAgoInMinutes / (60 * 24 * 30))
    timeAgo = `${months}m ago`
  } else {
    const years = Math.floor(timeAgoInMinutes / (60 * 24 * 365))
    timeAgo = `${years}y ago`
  }

  return (
    <CompletePostContainer>
      <CompletePostContent>
        <Summary>
          <GithubAndBack>
            <Back as='a' href='/' rel='noopener noreferrer'>
              <img src={backIcon} />
              <label>BACK</label>
            </Back>
            <Github as='a' href={user.html_url} target='_blank' rel='noopener noreferrer'>
              <label>GITHUB</label>
              <img src={arrowSquareoutIcon} />
            </Github>
          </GithubAndBack>

          <Title>{currentPost.title}</Title>

          <TopInfo>
            <Username>
              <img src={usernameIcon} />
              <span>{user?.login ?? 'Unknown user'}</span>
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
          <StyledMarkdown>
            <ReactMarkdown
              components={{
                code: ({ node, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <SyntaxHighlighter
                      style={{
                        ...dracula,
                        'pre[class*="language-"]': {
                          background: '#112131',
                          padding: '1rem',
                          borderRadius: '2px',
                          marginBottom: '1.5rem'
                        },
                        'code[class*="language-"]': {
                          fontFamily: 'Fira Code, monospace',
                          color: '#D5DCE3',
                          background: '#112131',
                          borderRadius: '2px',
                          whiteSpace: 'pre-wrap',
                          wordWrap: 'break-word'
                        }
                      }}
                      language={match[1]}
                      PreTag='div'
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code {...props}>{children}</code>
                  )
                }
              }}
            >
              {currentPost.body}
            </ReactMarkdown>
          </StyledMarkdown>
        </Post>
      </CompletePostContent>
    </CompletePostContainer>
  )
}