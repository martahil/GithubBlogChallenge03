import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default.layout'
import { CompletePostPage } from './components/CompletePostPage'
import { Home } from './components/Home'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/issue' element={<CompletePostPage />} />
      </Route>
    </Routes>
  )
}