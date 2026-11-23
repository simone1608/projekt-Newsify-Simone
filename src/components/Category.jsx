import { IoChevronForward } from "react-icons/io5"

export default function Category({ title, children }) {
    return (
        <details className="category">
            <summary className="category__summary">
                {title}
                <IoChevronForward className="category__arrow" />
            </summary>
            <div className="category__content">
                {children}
            </div>
        </details>
    )
}
