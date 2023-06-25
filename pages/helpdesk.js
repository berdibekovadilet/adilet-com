import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Cover from "/public/covers/helpdesk_cover.png"

export default function Helpdesk() {
    return (
        <div className='max-w-[940px] mx-auto px-4 py-4'>
            <Head>
                <title>Helpdesk | Adilet Berdibekov</title>
                <meta name="description" content="Adilet Berdibekov | Front-End Developer"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <div className="flex mb-8">
                <Link href="/" className="text-gray-400 hover:text-white">Back</Link>
                <div className='w-full'>
                    <h2 className="font-bold text-center">Helpdesk</h2>
                </div>
            </div>
            <Image src={Cover} alt={Cover} width={940} height={440} className='rounded mb-4'/>
            <p className="mb-3">
                Helpdesk is a forward-thinking company specializing in server rental services.
            </p>
            <p className="mb-3">
                I designed their landing page using Next.js, ensuring an efficient, responsive, and SEO-optimized
                platform.
            </p>
            <p className="mb-3">
                The site provides potential clients with essential information about their services, making it easy to
                understand what the company offers.
            </p>
            <p className="mb-3">
                High-quality SEO practices were implemented throughout the project to guarantee improved visibility and
                organic traffic, thus, driving potential leads and conversions.
            </p>
            <button
                className='bg-white mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-blue-500 text-black'>
                <a href="https://helpdesk.kg/" target="_blank" rel="noopener" className='cursor-pointer'>
                    Visit Project
                </a>
            </button>
        </div>
    );
}

