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
                <Link href="/" className="text-gray-400 hover:text-white">Назад</Link>
                <div className='w-full'>
                    <h2 className="font-bold text-center">ShopCasio</h2>
                </div>
            </div>
            <Image src={Cover} alt={Cover} width={940} height={440} className='rounded mb-4'/>
            <p className="mb-3">
                Casio - всемирно известный бренд, и у меня была возможность создать интернет-магазин для авторизованного дилера в Кыргызстане.
            </p>
            <p className="mb-3">
                Сайт электронной коммерции был разработан на платформе Shopify с использованием их API.
            </p>
            <p className="mb-3">
                В проекте использовался безголовый фреймворк Hydrogen, который официально предоставляется компанией Shopify и предлагает универсальную и эффективную среду для создания многофункционального интернет-магазина.
            </p>
            <p className="mb-3">
                Взаимодействие с бэкендом осуществлялось через GraphQL, что обеспечило эффективную передачу данных и бесперебойную работу пользователей.
            </p>
            <p className="mb-3">
                Этот проект демонстрирует мои навыки работы с расширенными возможностями Shopify и использования безголовых фреймворков при создании отзывчивых решений для электронной коммерции.
            </p>
            <button
                className='bg-white mt-8 px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-blue-500 text-black'>
                <a href="http://shopcasio.bstarco.kg/" target="_blank" rel="noopener" className='cursor-pointer'>
                    Посетить проект
                </a>
            </button>
        </div>
    );
}

