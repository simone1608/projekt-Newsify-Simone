import { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Archive from './pages/Archive'
import Settings from './pages/Settings'
import Navigation from './components/Navigation'
import './App.css'

function App() {

  const [activePage, setActivePage] = useState('home')
  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories')

    return savedCategories ? JSON.parse(savedCategories) : {
      europe: true,
      health: true,
      sport: true,
      business: true,
      travel: true
    }
  })

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])

  return (
    <>
      <Header />

      {activePage === 'home' && (<Home categories={categories} />)}
      {activePage === 'archive' && <Archive categories={categories} />}
      {activePage === 'popular' && <h1>Popular page</h1>}
      {activePage === 'settings' && (<Settings categories={categories} setCategories={setCategories} />)}

      <Navigation activePage={activePage} setActivePage={setActivePage}
      />
    </>
  )
}

export default App
