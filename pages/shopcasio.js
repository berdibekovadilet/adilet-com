import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cover from "/public/covers/shopcasio.webp"

export default function Shopcasio() {
    return (
        <div className='max-w-[940px] mx-auto px-4 py-4'>
            <Head>
                <title>ShopCasio | Adilet Berdibekov</title>
                <meta name="description" content="Adilet Berdibekov | Front-End Developer"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <div className="flex mb-8">
                <Link href="/" className="text-gray-400 hover:text-white">Back</Link>
                <div className='w-full'>
                    <h2 className="font-bold text-center">ShopCasio</h2>
                </div>
            </div>
            <Image src={Cover} alt={Cover} width={940} height={440} className='rounded mb-4'/>
            <p className="mb-3">
                Casio is a globally recognized brand, and I had the opportunity to create an online store for an
                authorized dealer in Kyrgyzstan.
            </p>
            <p className="mb-3">
                The e-commerce site was developed on the Shopify platform using their API.
            </p>
            <p className="mb-3">
                The project utilized the headless framework Hydrogen, which is officially provided by Shopify, offering
                a versatile and efficient environment for building a feature-rich online store.
            </p>
            <p className="mb-3">
                Interaction with the backend was carried out through GraphQL, ensuring efficient data transfer and a
                seamless user experience.
            </p>
            <p className="mb-3">
                This project highlighted my proficiency with Shopify's advanced features and the use of innovative
                headless frameworks in creating responsive e-commerce solutions.
            </p>
            <button
                className='bg-white mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-blue-500 text-black'>
                <a href="http://shopcasio.bstarco.kg/" target="_blank" rel="noopener" className='cursor-pointer'>
                    Visit Project
                </a>
            </button>
        </div>
    );
}

