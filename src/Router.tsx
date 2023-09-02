import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { DefaultLayout } from './layout/DefaultLayout'
import { Post } from './Pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:idPost" element={<Post />} />
      </Route>
    </Routes>
  )
}
