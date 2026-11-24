export default function Settings({ categories, setCategories }) {
    return (
        <main className="settings">
            <h1>Settings</h1>
            <h2>Categories</h2>

            <div className="settings__categories">
                <label>
                    <span>Europe</span>
                    <input type="checkbox"
                        checked={categories.europe}
                        onChange={() => setCategories({ ...categories, europe: !categories.europe })} />
                </label>
                <label>
                    <span>Health</span>
                    <input type="checkbox"
                        checked={categories.health}
                        onChange={() => setCategories({ ...categories, health: !categories.health })} />
                </label>
                <label>
                    <span>Sport</span>
                    <input type="checkbox"
                        checked={categories.sport}
                        onChange={() => setCategories({ ...categories, sport: !categories.sport })} />
                </label>
                <label>
                    <span>Business</span>
                    <input type="checkbox"
                        checked={categories.business}
                        onChange={() => setCategories({ ...categories, business: !categories.business })} />
                </label>
                <label>
                    <span>Travel</span>
                    <input type="checkbox"
                        checked={categories.travel}
                        onChange={() => setCategories({ ...categories, travel: !categories.travel })} />
                </label>
            </div>
        </main>
    )
}
