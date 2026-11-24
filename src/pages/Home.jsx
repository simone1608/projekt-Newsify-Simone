import Category from '../components/Category'
import News from '../components/News'

export default function Home({ categories }) {
    return (
        <main className="home">
            <header className="home__header">
                <input type="text" name="" id="" placeholder="Search news" />
            </header>

            {categories.europe && (
                <Category title="Europe">
                    <News query="Europe" category="Europe" />
                </Category>
            )}


            {categories.health && (
                <Category title="Health">
                    <News query="Health" category="Health" />
                </Category>
            )}

            {categories.sport && (
                <Category title="Sport">
                    <News query="Sport" category="Sport" />
                </Category>
            )}

            {categories.business && (
                <Category title="Business">
                    <News query="Business" category="Business" />
                </Category>
            )}

            {categories.travel && (
                <Category title="Travel">
                    <News query="Travel" category="Travel" />
                </Category>
            )}

        </main>
    )
}
