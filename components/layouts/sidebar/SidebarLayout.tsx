import Link from 'next/link'
import { useEffect, useState } from 'react'

export interface ISidebarLayout {}

const SidebarLayout = () => {
    const [isScrolledToTop, toggleScrollToTop] = useState(true)

    // Used to toggle menu color
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset !== 0) {
                toggleScrollToTop(false)
            } else {
                toggleScrollToTop(true)
            }
        }
    }, [])

    return (
        <nav
            className={`transition ease-linear delay-50 sticky z-10 flex p-8 gap-5 top-0 mx-auto ${
                isScrolledToTop ? 'bg-smoothYellow-50' : 'bg-white shadow-sm'
            }`}
        >
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    )
}

export default SidebarLayout
