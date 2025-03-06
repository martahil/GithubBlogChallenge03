import { createContext, ReactNode, useEffect, useState } from 'react'

interface Post {
  id: number;
  title: string;
  content: string;
  postedAt: string;
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
    const response = await fetch('http://localhost:3000/posts')
    const data = await response.json()

    setPosts(data)
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
