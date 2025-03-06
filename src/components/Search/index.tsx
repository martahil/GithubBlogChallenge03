import { useEffect, useState } from "react";
import { IndividualPost, PostContent, PostData, PostsCounter, PostsList, PostTitle, PostTitleAndData, SearchContainer, SearchContent, SearchHeader, SearchTitleAndCounter } from "./styles";

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
            {posts.map((post) => (
              <IndividualPost key={post.id}>
                <PostTitleAndData>
                  <PostTitle>{post.title}</PostTitle>
                  <PostData>{post.postedAt}</PostData>
                </PostTitleAndData>
                <PostContent>{post.content}</PostContent>
              </IndividualPost>
            ))}
          </PostsList>
        </SearchContent>
      </SearchContainer >
    </>
  )
}