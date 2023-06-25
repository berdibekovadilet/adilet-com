import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cover from "/public/covers/mbusiness_cover.png"

export default function Mbusiness() {
    return (
        <div className='max-w-[940px] mx-auto px-4 py-4'>
            <Head>
                <title>MBusiness | Adilet Berdibekov</title>
                <meta name="description" content="Adilet Berdibekov | Front-End Developer"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <div className="flex mb-8">
                <Link href="/" className="text-gray-400 hover:text-white">Back</Link>
                <div className='w-full'>
                    <h2 className="font-bold text-center">MBusiness</h2>
                </div>
            </div>
            <Image src={Cover} alt={Cover} width={940} height={440} className='rounded mb-4'/>
            <p className="mb-3">
                MBusiness, a prominent digital banking solution for legal entities, is a flagship project by MBank, one
                of the largest banks in Kyrgyzstan.
            </p>
            <p className="mb-3">
                As a key front-end developer within a large team of backend and mobile developers, I contributed
                significantly to the project. The web application was built using React and TypeScript, leveraging MobX
                for state management.
            </p>
            <p className="mb-3">
                My role emphasized the importance of writing maintainable, high-quality code suitable for a large-scale
                project environment, and a strong focus was placed on improving the speed and efficiency of the web
                application.
            </p>
            <p className="mb-3">
                This project showcased my ability to work collaboratively and contribute effectively to complex,
                large-scale projects.
            </p>
            <div className="flex gap-6">
                <button
                    className='bg-white mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-blue-500 text-black'>
                    <a href="https://mbank.kg/mbusiness" target="_blank" rel="noopener" className='cursor-pointer'>
                        Visit Landing
                    </a>
                </button>
                <button
                    className='bg-yellow-500 mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-white text-black'>
                    <a href="https://smart.mbusiness.kg/" target="_blank" rel="noopener" className='cursor-pointer'>
                        Visit Project
                    </a>
                </button>
            </div>
        </div>
    );
}

