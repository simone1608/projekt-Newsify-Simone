import NewsCard from './NewsCard'

export default function PopularNews({ category, news, loading, error }) {

    const filteredNews = (news || []).filter(
        article => article.category === category
    )

    return (
        <div>
            {loading && <p>Loading popular news...</p>}
            {error && <p>Error: {error}</p>}

            {filteredNews.map((article, index) => (
                <NewsCard
                    key={article.id || index}
                    article={article}
                    category={category}
                />
            ))}
        </div>
    )
}
