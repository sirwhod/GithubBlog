import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { IssuesProvider } from './context/issues'

function App() {
  return (
    <IssuesProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </IssuesProvider>
  )
}

export default App
