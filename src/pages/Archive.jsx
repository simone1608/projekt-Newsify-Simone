import { useState } from "react"
import ArchiveCard from '../components/ArchiveCard'
import Category from '../components/Category'

export default function Archive({ categories }) {

    const [savedArticles, setSavedArticles] = useState(() => {
        return JSON.parse(localStorage.getItem("savedArticles") || "[]")
    })

    const categoryList = ["Europe", "Health", "Sport", "Business", "Travel"]

    function handleDelete(articleId) {
        const updatedArticles = savedArticles.filter(
            article => article._id !== articleId
        )

        setSavedArticles(updatedArticles)
        localStorage.setItem("savedArticles", JSON.stringify(updatedArticles))
        localStorage.removeItem(`savedArticle-${articleId}`)
    }

    return (
        <main className="archive">
            {categoryList.map((category) => (
                categories[category.toLowerCase()] && (
                    <Category key={category} title={category}>
                        {savedArticles.filter(article => article.category === category).map(article => (
                            <ArchiveCard key={article._id} article={article} onDelete={handleDelete} />
                        ))}
                    </Category>
                )
            ))}
        </main>
    )
}
