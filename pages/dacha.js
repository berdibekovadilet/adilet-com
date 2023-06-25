import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cover from "/public/covers/dacha_cover.png"

export default function Dacha() {
    return (
        <div className='max-w-[940px] mx-auto px-4 py-4'>
            <Head>
                <title>Dacha | Adilet Berdibekov</title>
                <meta name="description" content="Adilet Berdibekov | Front-End Developer"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <div className="flex mb-8">
                <Link href="/" className="text-gray-400 hover:text-white">Back</Link>
                <div className='w-full'>
                    <h2 className="font-bold text-center">Dacha</h2>
                </div>
            </div>
            <Image src={Cover} alt={Cover} width={940} height={440} className='rounded mb-4'/>
            <p className="mb-3">
                Dacha is a vibrant Ukrainian cuisine restaurant located in Hong Kong, offering a unique blend of
                tradition and innovation.
            </p>
            <p className="mb-3">
                I developed their online platform using WordPress, creating an interactive and user-friendly interface.
                The website includes a convenient table reservation system and an integrated e-commerce store for the
                restaurant's exclusive products.
            </p>
            <p className="mb-3">
                This project involved a strategic blend of design and functionality, prioritizing user experience while
                highlighting the distinctive character of the restaurant.
            </p>
            <button
                className='bg-white mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-blue-500 text-black'>
                <a href="https://dacha.com.hk/" target="_blank" rel="noopener" className='cursor-pointer'>
                    Visit Project
                </a>
            </button>
        </div>
    );
}

