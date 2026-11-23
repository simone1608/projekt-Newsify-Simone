import { useState } from 'react'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import './App.css'

function App() {

  const [activePage, setActivePage] = useState('home')

  return (
    <>
      {activePage === 'home' && <Home />}
      {activePage === 'archive' && <h1>Archive page</h1>}
      {activePage === 'popular' && <h1>Popular page</h1>}
      {activePage === 'settings' && <h1>Settings page</h1>}

      <Navigation activePage={activePage} setActivePage={setActivePage}
      />
    </>
  )
}

export default App
