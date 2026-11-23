export default function NewsCard({ article }) {
    return (
        <article className="news-card">
            <a href={article.web_url} target="_blank" rel="noopener noreferrer">
                <h3>{article.headline.main}</h3>
                <p>{article.abstract}</p>
            </a>
        </article>
    )
}
