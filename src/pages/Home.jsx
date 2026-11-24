import Category from '../components/Category'
import News from '../components/News'

export default function Home({ categories }) {
    return (
        <main className="home">
            <header className="home__header">
                <h1>Newsify</h1>
                <input type="text" name="" id="" placeholder="Search news" />
            </header>

            {categories.europe && (
                <Category title="Europe">
                    <p>Europe news</p>
                </Category>
            )}


            {categories.health && (
                <Category title="Health">
                    <News />
                </Category>
            )}

            {categories.sport && (
                <Category title="Sport">
                    <p>Sport news</p>
                </Category>
            )}

            {categories.business && (
                <Category title="Business">
                    <p>Business news</p>
                </Category>
            )}

            {categories.travel && (
                <Category title="Travel">
                    <p>Travel news</p>
                </Category>
            )}

        </main>
    )
}
