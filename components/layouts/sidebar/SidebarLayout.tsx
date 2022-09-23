import Link from 'next/link'

export interface ISidebarLayout {}

const SidebarLayout = () => {
    return (
        <nav>
            <input placeholder="Search..." />
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </nav>
    )
}

export default SidebarLayout
