import { useState } from "react"
import { LuTrash } from "react-icons/lu"

export default function ArchiveCard({ article, onDelete }) {

    const [touchStart, setTouchStart] = useState(0)
    const [isSwiped, setIsSwiped] = useState(false)

    return (
        <div className="news-card-wrapper">
            <div
                className={`news-card__content ${isSwiped ? "news-card__content--open" : ""}`}
                onTouchStart={(e) => setTouchStart(e.touches[0].screenX)}
                onTouchEnd={(e) => {
                    const endX = e.changedTouches[0].screenX
                    const difference = touchStart - endX

                    if (difference > 50) setIsSwiped(true)
                    if (difference < -50) setIsSwiped(false)
                }}
            >

                <article className="news-card">
                    <a href={article.web_url} target="_blank" rel="noopener noreferrer">
                        <img
                            src={article.multimedia?.default?.url}
                            alt={article.headline.main}
                        />

                        <div className="news-card__text">
                            <h3>{article.headline.main}</h3>
                            <p>{article.abstract}</p>
                        </div>
                    </a>
                </article>

                <div className="archive-card__delete">
                    <button onClick={() => onDelete(article._id)}>
                        <LuTrash />
                    </button>
                </div>

            </div>
        </div>
    )
}