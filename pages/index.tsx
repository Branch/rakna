import Head from 'next/head'
import Image from 'next/image'

import CatCard from '../components/cards/cat/CatCard'
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks'
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout'
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout'
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
    return (
        <div className="flex justify-center flex-col items-center min-h-screen">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Räkna på bolån" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Räkna på bolån!</h1>
                <div>
                    <CatCard {...mockCatCardProps.base} />
                    <CatCard {...mockCatCardProps.base} />
                    <CatCard {...mockCatCardProps.base} />
                    <CatCard {...mockCatCardProps.base} />
                </div>
            </main>
        </div>
    )
}

export default Home

Home.getLayout = (page) => {
    return (
        <PrimaryLayout>
            <SidebarLayout />
            {page}
        </PrimaryLayout>
    )
}
