import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cover from "/public/covers/jme_cover.png"

export default function Jme() {
    return (
        <div className='max-w-[940px] mx-auto px-4 py-4'>
            <Head>
                <title>JME | Adilet Berdibekov</title>
                <meta name="description" content="Adilet Berdibekov | Front-End Developer"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <div className="flex mb-8">
                <Link href="/" className="text-gray-400 hover:text-white">Back</Link>
                <div className='w-full'>
                    <h2 className="font-bold text-center">Jme</h2>
                </div>
            </div>
            <Image src={Cover} alt={Cover} width={940} height={440} className='rounded mb-4'/>
            <p className="mb-3">
                JME is an innovative clothing brand renowned for designing, tailoring, and wholesaling their unique
                fashion collections.
            </p>
            <p className="mb-3">
                I had the opportunity to build their e-commerce platform with a particular emphasis on mobile
                optimization and aesthetic design. The stylish website perfectly encapsulates the brand's identity,
                offering seamless navigation and an intuitive shopping experience for users.
            </p>
            <p className="mb-3">
                The project showcased the importance of combining brand personality with technology to create an
                effective and appealing online presence.
            </p>
            <button
                className='bg-white mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-blue-500 text-black'>
                <a href="https://jmecasual.com/" target="_blank" rel="noopener" className='cursor-pointer'>
                    Visit Project
                </a>
            </button>
        </div>
    );
}

