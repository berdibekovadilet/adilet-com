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
                <Link href="/" className="text-gray-400 hover:text-white">Назад</Link>
                <div className='w-full'>
                    <h2 className="font-bold text-center">Helpdesk</h2>
                </div>
            </div>
            <Image src={Cover} alt={Cover} width={940} height={440} className='rounded mb-4'/>
            <p className="mb-3">
                Helpdesk - компания специализирующаяся на предоставлении услуг по аренде серверов.
            </p>
            <p className="mb-3">
                Я разработал их landing page используя Next.js, обеспечив эффективную, отзывчивую и SEO-оптимизированную
                платформу.
            </p>
            <p className="mb-3">
                На сайте потенциальные клиенты найдут важную информацию о своих услугах, что позволит им легко понять, что предлагает компания.
            </p>
            <p className="mb-3">
                На протяжении всего проекта применялись высококачественные SEO-практики, гарантирующие улучшение видимости и
                органического трафика, что способствовало привлечению потенциальных клиентов и конверсии.
            </p>
            <button
                className='bg-white mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-blue-500 text-black'>
                <a href="https://helpdesk.kg/" target="_blank" rel="noopener" className='cursor-pointer'>
                    Посетить проект
                </a>
            </button>
        </div>
    );
}

