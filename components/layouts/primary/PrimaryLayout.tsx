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
        </>
    )
}

export default PrimaryLayout
