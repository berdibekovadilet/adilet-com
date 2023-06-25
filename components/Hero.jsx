import React from 'react';

export const Hero = () => {
    return (
        <div className='my-16'>
            <h1 className="text-3xl md:text-[56px] leading-snug md:leading-tight">
                React Front-End Developer ✦ Currently enhancing digital banking solutions at MBusiness ✦ Passionate
                about creating high-performance web applications and e-commerce platforms
            </h1>
            <div className='mt-[36px] flex flex-col md:flex-row gap-2'>
                <p>Working with the Latest Front-End Tech:</p>
                <div className='flex items-center gap-2 flex-wrap'>
                    <p className='bg-white text-black py-1 px-4 rounded text-sm'>React</p>
                    <p className='bg-white text-black py-1 px-4 rounded text-sm'>Next</p>
                    <p className='bg-white text-black py-1 px-4 rounded text-sm'>Remix</p>
                    <p className='bg-white text-black py-1 px-4 rounded text-sm'>Hydrogen</p>
                    <p className='bg-white text-black py-1 px-4 rounded text-sm'>Mobx</p>
                    <p className='bg-white text-black py-1 px-4 rounded text-sm'>Tailwind</p>
                </div>
            </div>
        </div>
    );
};

