import { Header } from "./components/Header"
import { Profile } from "./components/Profile"
import { Search } from "./components/Search"
import { GlobalStyle } from "./styles/global"
import { PostsProvider } from './contexts/PostsContext'
import { CompletePostPage } from "./components/CompletePostPage/index"
import { UserProvider } from "./contexts/UserContext"

function App() {
  return (
    <>
      <Header />
      {/* <CompletePostPage /> */}
      <UserProvider>
        <Profile />
      </UserProvider>
      <PostsProvider>
        <Search />
      </PostsProvider>
      <GlobalStyle />
    </>

  )
}

export default App
