import { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Archive from './pages/Archive'
import Popular from './pages/Popular'
import Settings from './pages/Settings'
import Navigation from './components/Navigation'
import './App.css'

function App() {

  const [activePage, setActivePage] = useState('home')
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode')

    if (savedTheme !== null) {
      return savedTheme === 'true'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
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
      <div className={darkMode ? 'app dark-mode' : 'app'}>
        <Header />

        {activePage === 'home' && (<Home categories={categories} />)}
        {activePage === 'archive' && <Archive categories={categories} />}
        {activePage === 'popular' && <Popular categories={categories} />}
        {activePage === 'settings' && (<Settings categories={categories} setCategories={setCategories} darkMode={darkMode} setDarkMode={setDarkMode} />)}

        <Navigation activePage={activePage} setActivePage={setActivePage} />
      </div >
    </>
  )
}

export default App
