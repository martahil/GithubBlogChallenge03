import { createContext, ReactNode, useEffect, useState } from 'react'
import axios from 'axios'

interface Post {
  number: number
  title: string
  body: string
  created_at: string
  comments: number
}

interface PostContextType {
  posts: Post[]
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as
  PostContextType
)

export function PostsProvider({ children }:
  PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>
    ([])

  async function loadPosts() {
    const response = await axios.get('https://api.github.com/search/issues', {
      params: { q: 'repo:martahil/GithubBlogChallenge03' }
    })

    const issues = response.data.items
    setPosts(issues)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts }}>
      {children}
    </PostsContext.Provider>
  )
}
