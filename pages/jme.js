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
                <Link href="/" className="text-gray-400 hover:text-white">Назад</Link>
                <div className='w-full'>
                    <h2 className="font-bold text-center">Jme</h2>
                </div>
            </div>
            <Image src={Cover} alt={Cover} width={940} height={440} className='rounded mb-4'/>
            <p className="mb-3">
                JME - инновационный бренд одежды, известный своим дизайном, пошивом и оптовой продажей модных коллекций.
            </p>
            <p className="mb-3">
                У меня была возможность создать их платформу электронной коммерции с особым акцентом на мобильную
                оптимизации и эстетическому дизайну. Стильный веб-сайт идеально отражает идентичность бренда,
                предлагая пользователям удобную навигацию и интуитивно понятный опыт покупок.
            </p>
            <p className="mb-3">
                Проект продемонстрировал важность сочетания индивидуальности бренда с технологиями для создания
                эффективного и привлекательного онлайн-представительства.
            </p>
            <button
                className='bg-white mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-blue-500 text-black'>
                <a href="https://jmecasual.com/" target="_blank" rel="noopener" className='cursor-pointer'>
                    Посетить проект
                </a>
            </button>
        </div>
    );
}

