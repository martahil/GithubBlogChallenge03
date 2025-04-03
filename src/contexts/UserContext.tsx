import { createContext, ReactNode, useEffect, useState } from 'react'
import axios from 'axios'

interface User {
  login: string
  avatar_url: string
  followers: number
  bio: string
  name: string
  company: string
  html_url: string
}

interface UserContextType {
  user: User | null
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as
  UserContextType
)

export function UserProvider({ children }:
  UserProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  async function fetchUserData() {
    try {
      const response = await axios.get<User>('https://api.github.com/users/martahil')
      setUser(response.data) // Atualiza o estado com os dados do usuário

    } catch (error) {
      console.error('Error fetching user data: ', error)

      if (error.response) {
        const rateLimitRemaining = error.response.headers['x-ratelimit-remaining']
        const rateLimitReset = error.response.headers['x-ratelimit-reset']
        console.log(`Rate limit remaining: ${rateLimitRemaining}`)
        console.log(`Rate limit reset at: ${new Date(rateLimitReset * 1000)}`)
      }
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}
