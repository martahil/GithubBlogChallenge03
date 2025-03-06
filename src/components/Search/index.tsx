import { useEffect, useState } from "react";
import { IndividualPost, PostContent, PostDate, PostsCounter, PostsList, PostTitle, PostTitleAndDate, SearchContainer, SearchContent, SearchHeader, SearchTitleAndCounter } from "./styles";

interface Posts {
  id: number;
  title: string;
  content: string;
  postedAt: string;
}

export function Search() {
  const [posts, setPosts] = useState<Posts[]>([])

  async function loadPosts() {
    const response = await fetch('http://localhost:3000/posts')
    const data = await response.json()
    setPosts(data)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <>
      <SearchContainer>
        <SearchContent>
          <SearchTitleAndCounter>
            <SearchHeader>Posts</SearchHeader>
            <PostsCounter>6 posts</PostsCounter>
          </SearchTitleAndCounter>
          <input type="text" placeholder="Search content" />
          <PostsList>
            {posts.map((post) => {
              const postedDate = new Date(post.postedAt);
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
                <IndividualPost key={post.id}>
                  <PostTitleAndDate>
                    <PostTitle>{post.title}</PostTitle>
                    <PostDate>{timeAgo}</PostDate>
                  </PostTitleAndDate>
                  <PostContent>{post.content}</PostContent>
                </IndividualPost>
              )
            })}
          </PostsList>
        </SearchContent>
      </SearchContainer >
    </>
  )
}