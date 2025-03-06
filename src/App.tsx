import { Header } from "./components/Header"
import { Profile } from "./components/Profile"
import { Search } from "./components/Search"
import { GlobalStyle } from "./styles/global"
import { PostsProvider } from './contexts/PostsContext'
import { CompletePostPage } from "./components/CompletePostPage/index"

function App() {
  return (
    <>
      <Header />
      <CompletePostPage />
      {/* <Profile />
      <PostsProvider>
        <Search />
      </PostsProvider> */}
      <GlobalStyle />
    </>

  )
}

export default App
