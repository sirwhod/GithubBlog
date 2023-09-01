import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div className="w-screen h-full min-h-screen flex flex-col items-center justify-start bg-base-background">
      <Header />
      <main className="max-w-[864px] w-full -mt-[88px]">
        <Outlet />
      </main>
    </div>
  )
}
