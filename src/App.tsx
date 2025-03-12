import { GlobalStyle } from "./styles/global"
import { PostsProvider } from './contexts/PostsContext'
import { UserProvider } from "./contexts/UserContext"
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router"

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <PostsProvider>
          <Router />
        </PostsProvider>
      </UserProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
