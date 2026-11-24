import { useState } from 'react'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Navigation from './components/Navigation'
import './App.css'

function App() {

  const [activePage, setActivePage] = useState('home')
  const [categories, setCategories] = useState({
    europe: true,
    health: true,
    sport: true,
    business: true,
    travel: true
  })

  return (
    <>
      {activePage === 'home' && (<Home categories={categories} />)}
      {activePage === 'archive' && <h1>Archive page</h1>}
      {activePage === 'popular' && <h1>Popular page</h1>}
      {activePage === 'settings' && (<Settings categories={categories} setCategories={setCategories} />)}

      <Navigation activePage={activePage} setActivePage={setActivePage}
      />
    </>
  )
}

export default App
