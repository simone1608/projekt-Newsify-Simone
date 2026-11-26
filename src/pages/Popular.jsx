import { useEffect, useState } from 'react'
import PopularNews from '../components/PopularNews'
import Category from '../components/Category'

export default function Popular({ categories }) {

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchPopularNews() {
            try {
                const searchTerms = [
                    { term: 'Europe', category: 'Europe' },
                    { term: 'health', category: 'Health' },
                    { term: 'sports', category: 'Sport' },
                    { term: 'business', category: 'Business' },
                    { term: 'travel', category: 'Travel' }
                ]

                let allArticles = []

                for (const item of searchTerms) {
                    const response = await fetch(
                        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${item.term}&sort=relevance&api-key=${import.meta.env.VITE_NYT_API_KEY}`
                    )

                    if (!response.ok) {
                        throw new Error('Could not fetch popular news')
                    }

                    const data = await response.json()
                    const articlesWithCategory = data.response.docs.map(article => ({
                        ...article,
                        category: item.category
                    }))

                    allArticles = [...allArticles, ...articlesWithCategory]
                }

                setNews(allArticles)

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPopularNews()
    }, [])

    return (
        <main className="popular">

            {categories.europe && (
                <Category title="Europe">
                    <PopularNews category="Europe" news={news} loading={loading} error={error} />
                </Category>
            )}

            {categories.health && (
                <Category title="Health">
                    <PopularNews category="Health" news={news} loading={loading} error={error} />
                </Category>
            )}

            {categories.sport && (
                <Category title="Sport">
                    <PopularNews category="Sport" news={news} loading={loading} error={error} />
                </Category>
            )}

            {categories.business && (
                <Category title="Business">
                    <PopularNews category="Business" news={news} loading={loading} error={error} />
                </Category>
            )}

            {categories.travel && (
                <Category title="Travel">
                    <PopularNews category="Travel" news={news} loading={loading} error={error} />
                </Category>
            )}

        </main>
    )
}