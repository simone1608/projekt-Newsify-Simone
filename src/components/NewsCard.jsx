import { useState } from "react"
import { FaRegBookmark } from "react-icons/fa6"

export default function NewsCard({ article }) {

    const [isSwiped, setIsSwiped] = useState(false)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            setIsSwiped(true)
        }

        if (touchEnd - touchStart > 50) {
            setIsSwiped(false)
        }
    }

    return (
        <>
            <div className="news-card-wrapper">

                <div className={`news-card__content ${isSwiped ? "news-card__content--open" : ""}`}>

                    <article className="news-card"
                        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
                        onTouchMove={(e) => setTouchEnd(e.touches[0].clientX)}
                        onTouchEnd={handleTouchEnd}
                        style={{
                            transform: isSwiped ? 'translateX(-100px)' : 'translateX(0)',
                            transition: 'transform 0.3s ease'
                        }}>

                        <a href={article.web_url} target="_blank" rel="noopener noreferrer">

                            <img src={article.multimedia?.default?.url} alt={article.headline.main} />

                            <div className="news-card__text">
                                <h3>{article.headline.main}</h3>
                                <p>{article.abstract}</p>
                            </div>

                        </a>
                    </article>
                </div>
            </div>
        </>
    )
}
