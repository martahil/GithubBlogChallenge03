import { Link } from 'react-router-dom'
import { IndividualPost, PostContent, PostDate, PostsCounter, PostsList, PostTitle, PostTitleAndDate, SearchContainer, SearchContent, SearchHeader, SearchTitleAndCounter } from "./styles";
import { useContext } from "react";
import { PostsContext } from '../../contexts/PostsContext'

export function Search() {
  const { posts } = useContext(PostsContext)

  return (
    <>
      <SearchContainer>
        <SearchContent>
          <SearchTitleAndCounter>
            <SearchHeader>Posts</SearchHeader>
            <PostsCounter>
              {posts.length === 1 || posts.length === 0 ? `${posts.length} post` : `${posts.length} posts`}
            </PostsCounter>
          </SearchTitleAndCounter>
          <input type="text" placeholder="Search content" />
          <PostsList>
            {posts.map((post) => {
              const postedDate = new Date(post.created_at);
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
                <IndividualPost key={post.number}>
                  <Link to={`/issue/${post.number}`}>
                    <PostTitleAndDate>
                      <PostTitle>{post.title}</PostTitle>
                      <PostDate>{timeAgo}</PostDate>
                    </PostTitleAndDate>
                    <PostContent>{post.body}</PostContent>
                  </Link>
                </IndividualPost>
              )
            })}
          </PostsList>
        </SearchContent>
      </SearchContainer >
    </>
  )
}