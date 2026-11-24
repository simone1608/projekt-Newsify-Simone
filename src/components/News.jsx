import { useEffect, useState } from "react"
import NewsCard from './NewsCard'

export default function News({ query, category }) {

    const [news, setNews] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${import.meta.env.VITE_NYT_API_KEY}`)
                const data = await response.json()

                setNews(data.response.docs)

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchNews()
    }, [])

    return (
        <div>
            {loading && <p>Loading news...</p>}

            {error && <p>Error: {error}</p>}

            {news && news.map((article, index) => (
                <NewsCard key={index} article={article} category={category} />
            ))}
        </div>
    )
}
