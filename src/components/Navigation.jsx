export default function Navigation({ activePage, setActivePage }) {
    return (
        <nav className="navigation">
            <button
                className={activePage === 'home' ? 'active' : ''}
                onClick={() => setActivePage('home')}>
                Home
            </button>
            <button
                className={activePage === 'archive' ? 'active' : ''}
                onClick={() => setActivePage('archive')}>
                Archive
            </button>
            <button
                className={activePage === 'popular' ? 'active' : ''}
                onClick={() => setActivePage('popular')}>
                Popular
            </button>
            <button
                className={activePage === 'settings' ? 'active' : ''}
                onClick={() => setActivePage('settings')}>
                Settings
            </button>
        </nav>
    )
}
