import { RiHome2Line } from "react-icons/ri"
import { FaRegBookmark, FaRegStar } from "react-icons/fa"
import { SlSettings } from "react-icons/sl"

export default function Navigation({ activePage, setActivePage }) {
    return (
        <nav className="navigation">
            <button
                className={activePage === 'home' ? 'active' : ''}
                onClick={() => setActivePage('home')}>
                <RiHome2Line />
                <span>Home</span>
            </button>
            <button
                className={activePage === 'archive' ? 'active' : ''}
                onClick={() => setActivePage('archive')}>
                <FaRegBookmark />
                <span>Archive</span>
            </button>
            <button
                className={activePage === 'popular' ? 'active' : ''}
                onClick={() => setActivePage('popular')}>
                <FaRegStar />
                <span>Popular</span>
            </button>
            <button
                className={activePage === 'settings' ? 'active' : ''}
                onClick={() => setActivePage('settings')}>
                <SlSettings />
                <span>Settings</span>
            </button>
        </nav>
    )
}
