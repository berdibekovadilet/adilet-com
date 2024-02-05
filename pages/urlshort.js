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
                <Link href="/" className="text-gray-400 hover:text-white">Назад</Link>
                <div className='w-full'>
                    <h2 className="font-bold text-center">URL Shorting</h2>
                </div>
            </div>
            <Image src={Cover} alt={Cover} width={940} height={440} className='rounded mb-4'/>
            <p className="mb-3">
                Удобное приложение, специально разработанное для упрощения процесса сокращения URL-адресов.
            </p>
            <p className="mb-3">
                Этот проект был разработан с использованием возможностей React, чтобы обеспечить высокую отзывчивость и
                интуитивно понятный интерфейс.
            </p>
            <p className="mb-3">
                Управление состоянием приложения было эффективно реализовано с помощью React и Redux.
            </p>
            <button
                className='bg-white mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-blue-500 text-black'>
                <a href="https://urlshorting.netlify.app/" target="_blank" rel="noopener" className='cursor-pointer'>
                    Посетить проект
                </a>
            </button>
        </div>
    );
}

