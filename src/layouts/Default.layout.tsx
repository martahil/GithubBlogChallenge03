import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/index'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}