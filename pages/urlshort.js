import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cover from "/public/covers/urlshorting_cover.png"

export default function Urlshort() {
    return (
        <div className='max-w-[940px] mx-auto px-4 py-4'>
            <Head>
                <title>URL Shoting | Adilet Berdibekov</title>
                <meta name="description" content="Adilet Berdibekov | Front-End Developer"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <div className="flex mb-8">
                <Link href="/" className="text-gray-400 hover:text-white">Back</Link>
                <div className='w-full'>
                    <h2 className="font-bold text-center">URL Shorting</h2>
                </div>
            </div>
            <Image src={Cover} alt={Cover} width={940} height={440} className='rounded mb-4'/>
            <p className="mb-3">
                A user-friendly application specifically designed to simplify the process of shortening URLs.
            </p>
            <p className="mb-3">
                This project was developed using the power of React to ensure high responsiveness and an intuitive
                interface.

            </p>
            <p className="mb-3">
                The application's state management was efficiently handled with the Redux Toolkit, showcasing its robust
                capabilities.
            </p>
            <p className="mb-3">
                This project not only served its primary function but also allowed for a deep
                understanding of React's dynamic features and the practical implementation of Redux in a real-world
                scenario.
            </p>
            <button
                className='bg-white mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-blue-500 text-black'>
                <a href="https://urlshorting.netlify.app/" target="_blank" rel="noopener" className='cursor-pointer'>
                    Visit Project
                </a>
            </button>
        </div>
    );
}

