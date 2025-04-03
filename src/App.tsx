import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { PostsProvider } from './contexts/PostsContext'
import { UserProvider } from './contexts/UserContext'
import { GlobalStyle } from './styles/global'

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
