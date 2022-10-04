import { ReactNode } from 'react'
import Head from 'next/head'

export interface IPrimaryLayout {
    children?: ReactNode
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
    return (
        <>
            <Head>Layout example</Head>
            <main>{children}</main>
            <footer className="flex items-center justify-center py-16 border-t border-gray-900 bg-solidBlue-50">
                Made in 🇸🇪
            </footer>
        </>
    )
}

export default PrimaryLayout
