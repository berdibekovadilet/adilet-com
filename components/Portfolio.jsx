import React from 'react';
import Image from "next/image";
import Mbusiness from "/public/portfolio/mbusiness.png"
import Jme from "/public/portfolio/jme.png"
import Helpdesk from "/public/portfolio/helpdesk.png"
import Dacha from "/public/portfolio/dacha.png"
import Link from "next/link";

export const Portfolio = () => {
    return (
        <div className='my-16 flex flex-col gap-6'>
            <Link href="/mbusiness" target="_blank" rel="noopener" className='cursor-pointer'>
                <Image src={Mbusiness} alt={Mbusiness} width={940} height={440}/>
            </Link>
            <Link href="/shopcasio" target="_blank" rel="noopener" className='cursor-pointer'>
                <video
                    src="/portfolio/urlshortVideo.mp4"
                    autoPlay
                    loop
                    muted
                />
            </Link>
            <Link href="/jme" target="_blank" rel="noopener" className='cursor-pointer'>
                <Image src={Jme} alt={Jme} width={940} height={440}/>
            </Link>
            <Link href="/urlshort" target="_blank" rel="noopener" className='cursor-pointer'>
                <video
                    src="/portfolio/urlshortVideo.mp4"
                    autoPlay
                    loop
                    muted
                />
            </Link>
            <div className="flex flex-col md:flex-row gap-6">
                <Link href="/dacha" target="_blank" rel="noopener" className="w-full cursor-pointer">
                    <Image src={Dacha} alt={Dacha} width={940} height={440}/>
                </Link>
                <Link href="/helpdesk" target="_blank" rel="noopener"
                      className="w-full md:w-[440px] cursor-pointer">
                    <Image src={Helpdesk} alt={Helpdesk} width={940} height={440}/>
                </Link>
            </div>
        </div>
    );
};

