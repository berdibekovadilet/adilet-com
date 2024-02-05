import React from 'react';

export const Hero = () => {
    return (
        <div className='my-16'>
            <h1 className="text-3xl md:text-[56px] leading-snug md:leading-tight">
                Здравствуйте! Я Front-End Разработчик, специализирующийся на React, с фокусом на создание современных и инновационных веб-приложений ✦.
            </h1>
            <div className='mt-[36px] flex flex-col md:flex-row gap-2'>
                <p>Работаю с последними технологиями Front-End:</p>
                <div className='flex items-center gap-2 flex-wrap'>
                    <p className='bg-white text-black py-1 px-4 rounded text-sm'>React</p>
                    <p className='bg-white text-black py-1 px-4 rounded text-sm'>Next</p>
                    <p className='bg-white text-black py-1 px-4 rounded text-sm'>Redux</p>
                    <p className='bg-white text-black py-1 px-4 rounded text-sm'>Mobx</p>
                    <p className='bg-white text-black py-1 px-4 rounded text-sm'>Typescript</p>
                    <p className='bg-white text-black py-1 px-4 rounded text-sm'>Tailwind</p>
                </div>
            </div>
        </div>
    );
};

