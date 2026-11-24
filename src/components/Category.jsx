import { IoChevronForward } from "react-icons/io5"

export default function Category({ title, children }) {
    return (
        <details className="category">
            <summary className="category__summary">
                <div>
                    <img src="/newsify_logo.svg" alt="Newsify logo" />
                    {title}
                </div>
                <IoChevronForward className="category__arrow" />
            </summary>
            <div className="category__content">
                {children}
            </div>
        </details>
    )
}
