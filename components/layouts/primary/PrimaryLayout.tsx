import { ReactNode } from 'react'
import Head from 'next/head'

export interface IPrimaryLayout {
    children?: ReactNode
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
    return (
        <>
            <Head>
                <main>{children}</main>
            </Head>
        </>
    )
}

export default PrimaryLayout
