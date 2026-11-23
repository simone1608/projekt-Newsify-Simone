import Category from '../components/Category'

export default function Home() {
    return (
        <main className="home">
            <header className="home__header">
                <h1>Newsify</h1>
                <input type="text" name="" id="" placeholder="Search news" />
            </header>

            <Category title="Health">
                <p>Health news</p>
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
