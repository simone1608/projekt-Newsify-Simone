import '../styles/_settings.scss'

export default function Settings({ categories, setCategories, darkMode, setDarkMode }) {
    return (
        <main className="settings">
            <h1>Settings</h1>
            <h2>Categories</h2>

            <div className="settings__categories">
                <label>
                    <div>
                        <img src="/newsify_logo.svg" alt="Newsify logo" />
                        <span>Europe</span>
                    </div>
                    <input className="settings__switch" type="checkbox"
                        checked={categories.europe}
                        onChange={() => setCategories({ ...categories, europe: !categories.europe })} />
                </label>
                <label>
                    <div>
                        <img src="/newsify_logo.svg" alt="Newsify logo" />
                        <span>Health</span>
                    </div>
                    <input className="settings__switch" type="checkbox"
                        checked={categories.health}
                        onChange={() => setCategories({ ...categories, health: !categories.health })} />
                </label>
                <label>
                    <div>
                        <img src="/newsify_logo.svg" alt="Newsify logo" />
                        <span>Sport</span>
                    </div>
                    <input className="settings__switch" type="checkbox"
                        checked={categories.sport}
                        onChange={() => setCategories({ ...categories, sport: !categories.sport })} />
                </label>
                <label>
                    <div>
                        <img src="/newsify_logo.svg" alt="Newsify logo" />
                        <span>Business</span>
                    </div>
                    <input className="settings__switch" type="checkbox"
                        checked={categories.business}
                        onChange={() => setCategories({ ...categories, business: !categories.business })} />
                </label>
                <label>
                    <div>
                        <img src="/newsify_logo.svg" alt="Newsify logo" />
                        <span>Travel</span>
                    </div>
                    <input className="settings__switch" type="checkbox"
                        checked={categories.travel}
                        onChange={() => setCategories({ ...categories, travel: !categories.travel })} />
                </label>
            </div>

            <div className="settings__appearance">
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}
                </button>
            </div>

        </main>
    )
}
