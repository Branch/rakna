import Head from 'next/head'
import Image from 'next/image'

import PrimaryLayout from '../components/layouts/primary/PrimaryLayout'
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout'
import { NextPageWithLayout } from './page'

const About: NextPageWithLayout = () => {
    return (
        <div className="flex justify-center flex-col items-center min-h-screen">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Räkna på bolån" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Om räknalån.nu</h1>
            </main>

            <footer></footer>
        </div>
    )
}

export default About

About.getLayout = (page) => {
    return (
        <PrimaryLayout>
            <SidebarLayout />
            {page}
        </PrimaryLayout>
    )
}
