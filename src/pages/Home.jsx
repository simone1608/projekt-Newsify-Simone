import Category from '../components/Category'
import News from '../components/News'

export default function Home() {
    return (
        <main className="home">
            <header className="home__header">
                <h1>Newsify</h1>
                <input type="text" name="" id="" placeholder="Search news" />
            </header>

            <Category title="Health">
                <News />
            </Category>

            <Category title="Sport">
                <p>Sport news</p>
            </Category>

            <Category title="Travel">
                <p>Travel news</p>
            </Category>
        </main>
    )
}
