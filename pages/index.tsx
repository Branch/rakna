import Head from 'next/head'
import Image from 'next/image'

import svg from '../assets/images/top-pic.svg'

import PrimaryLayout from '../components/layouts/primary/PrimaryLayout'
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout'
import { NextPageWithLayout } from './page'
import Calculator from '../components/features/calculator/Calculator'
import { mockCalculatorProps } from '../components/features/calculator/Calculator.mocks'

const Home: NextPageWithLayout = () => {
    return (
        <div>
            <Head>
                <title>Räkna på bolån</title>
                <meta name="description" content="Räkna på bolån" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-smoothYellow-50 py-20">
                <div className="flex justify-center items-center">
                    <div className="flex flex-row gap-36">
                        <div className="flex flex-col justify-center gap-4">
                            <h1 className="font-Playfair text-5xl">
                                Räkna på bolån!
                            </h1>
                            <p className="max-w-md">
                                Använd kalkylatorn nedan för att se vad just du
                                skulle betala för olika räntor
                            </p>
                        </div>
                        <Image
                            alt="Graph hero image"
                            src={svg}
                            layout="intrinsic"
                        />
                    </div>
                </div>
            </div>
            <Calculator {...mockCalculatorProps.base} />
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
