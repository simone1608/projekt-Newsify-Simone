import { useState } from "react"
import { FaRegBookmark, FaBookmark } from "react-icons/fa6"

export default function NewsCard({ article }) {

    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [isSwiped, setIsSwiped] = useState(false)
    const [isSaved, setIsSaved] = useState(() => {
        return localStorage.getItem(`savedArticle-${article._id}`) === "true"
    })

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            setIsSwiped(true)
        }

        if (touchEnd - touchStart > 50) {
            setIsSwiped(false)
        }
    }

    function handleSave() {
        const newSavedStatus = !isSaved

        setIsSaved(newSavedStatus)

        localStorage.setItem(`savedArticle-${article._id}`, newSavedStatus)

        const savedArticles = JSON.parse(localStorage.getItem("savedArticles") || "[]")

        if (newSavedStatus) {
            savedArticles.push(article)
        } else {
            const updatedArticles = savedArticles.filter(
                savedArticle => savedArticle._id !== article._id
            )

            localStorage.setItem("savedArticles", JSON.stringify(updatedArticles))
            return
        }

        localStorage.setItem("savedArticles", JSON.stringify(savedArticles))
    }

    return (
        <>
            <div className="news-card-wrapper">

                <div className={`news-card__content ${isSwiped ? "news-card__content--open" : ""}`}
                    onTouchStart={(e) => setTouchStart(e.touches[0].screenX)}
                    onTouchEnd={(e) => {
                        const endX = e.changedTouches[0].screenX
                        const difference = touchStart - endX

                        if (difference > 50) setIsSwiped(true)
                        if (difference < -50) setIsSwiped(false)
                    }}>

                    <article className="news-card">

                        <a href={article.web_url} target="_blank" rel="noopener noreferrer">

                            <img src={article.multimedia?.default?.url} alt={article.headline.main} />

                            <div className="news-card__text">
                                <h3>{article.headline.main}</h3>
                                <p>{article.abstract}</p>
                            </div>

                        </a>
                    </article>
                    <div className={`news-card__save ${isSaved ? "news-card__save--saved" : ""}`}>
                        <button onClick={handleSave}>
                            {isSaved ? <FaBookmark /> : <FaRegBookmark />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
