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
                <Link href="/" className="text-gray-400 hover:text-white">Назад</Link>
                <div className='w-full'>
                    <h2 className="font-bold text-center">MBusiness</h2>
                </div>
            </div>
            <Image src={Cover} alt={Cover} width={940} height={440} className='rounded mb-4'/>
            <p className="mb-3">
                MBusiness - цифровое банковское решение для юридических лиц, флагманский проект МБанка, одного из крупнейших банков Кыргызстана.
            </p>
            <p className="mb-3">
                Будучи ключевым фронтенд-разработчиком в большой команде разработчиков, я внес большой вклад в проект. Веб-приложение было построено на React и TypeScript с использованием MobX.
            </p>
            <p className="mb-3">
                Моя роль подчеркивала важность написания удобного и качественного кода, подходящего для крупномасштабного проекта.
                Большое внимание уделялось повышению скорости и эффективности работы веб-приложения.
            </p>
            <p className="mb-3">
                Этот проект продемонстрировал мою способность работать в сотрудничестве и вносить эффективный вклад в сложные, масштабных проектов.
            </p>
            <div className="flex gap-6">
                <button
                    className='bg-white mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-blue-500 text-black'>
                    <a href="https://mbank.kg/mbusiness" target="_blank" rel="noopener" className='cursor-pointer'>
                        Посетить страницу
                    </a>
                </button>
                <button
                    className='bg-yellow-500 mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-white text-black'>
                    <a href="https://smart.mbusiness.kg/" target="_blank" rel="noopener" className='cursor-pointer'>
                        Посетить проект
                    </a>
                </button>
            </div>
        </div>
    );
}

