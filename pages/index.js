import Head from 'next/head'
import {About, Contact, Header, Hero, Portfolio} from "../components";

export default function Home() {
    return (
        <div className='max-w-[940px] mx-auto px-4'>
            <Head>
                <title>Adilet Berdibekov | Front-End Developer</title>
                <meta name="description" content="Adilet Berdibekov | Front-End Developer"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Header/>
            <Hero/>
            <About/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}
