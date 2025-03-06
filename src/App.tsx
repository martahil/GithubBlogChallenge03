import { Header } from "./components/Header"
import { Profile } from "./components/Profile"
import { Search } from "./components/Search"
import { GlobalStyle } from "./styles/global"
import { PostsProvider } from './contexts/PostsContext'

function App() {
  return (
    <>
      <Header />
      <Profile />
      <PostsProvider>
        <Search />
      </PostsProvider>
      <GlobalStyle />
    </>

  )
}

export default App
