import Head from 'next/head'

export interface ISidebarLayout {
    children?: JSX.Element
}

const SidebarLayout = ({ children }: ISidebarLayout) => {
    return (
        <>
            <Head>
                <main>{children}</main>
            </Head>
        </>
    )
}

export default SidebarLayout
