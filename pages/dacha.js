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
                <Link href="/" className="text-gray-400 hover:text-white">Назад</Link>
                <div className='w-full'>
                    <h2 className="font-bold text-center">Dacha</h2>
                </div>
            </div>
            <Image src={Cover} alt={Cover} width={940} height={440} className='rounded mb-4'/>
            <p className="mb-3">
                Дача" - это яркий ресторан украинской кухни, расположенный в Гонконге и предлагающий уникальное сочетание
                традиций и инноваций.
            </p>
            <p className="mb-3">
                Я разработал их онлайн-платформу на WordPress, создав интерактивный и удобный интерфейс.
                Сайт включает в себя удобную систему бронирования столиков и интегрированный магазин электронной коммерции для
                эксклюзивных продуктов ресторана.
            </p>
            <p className="mb-3">
                В этом проекте стратегически важно сочетать дизайн и функциональность, уделяя первостепенное внимание удобству пользователей и подчеркивая при этом
                подчеркивая при этом отличительные черты ресторана.
            </p>
            <button
                className='bg-white mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-blue-500 text-black'>
                <a href="https://dacha.com.hk/" target="_blank" rel="noopener" className='cursor-pointer'>
                    Посетить проект
                </a>
            </button>
        </div>
    );
}

