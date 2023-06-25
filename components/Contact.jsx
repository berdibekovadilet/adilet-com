import React from 'react';
import Image from "next/image";
import Whatsapp from "/public/icons/WhatsApp.svg"
import Telegram from "/public/icons/Telegram.svg"
import Mail from "/public/icons/Mail.svg"

export const Contact = () => {
    return (
        <div className='my-16 text-gray-400'>
            <h4 className="mb-8">Get in Touch</h4>
            <div className="flex flex-wrap flex-col md:flex-row justify-between gap-4">
                <a href="https://wa.me/+996702324322" target="_blank" rel="noopener">
                    <div className='bg-white px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-black'>
                        <Image src={Whatsapp} alt="Whatsapp" width="24px" height="24px"/>
                        <p>+996 702 324 322</p>
                    </div>
                </a>
                <a href="https://t.me/adiletberdibekov" target="_blank" rel="noopener">
                    <div className='bg-white px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-black'>
                        <Image src={Telegram} alt="Telegram" width="24px" height="24px"/>
                        <p>@adiletberdibekov</p>
                    </div>
                </a>
                <a href="mailto:berdibekovadilet@gmail.com" target="_blank" rel="noopener">
                    <div className='bg-white px-6 py-3 flex items-center gap-2 rounded cursor-pointer hover:text-black'>
                        <Image src={Mail} alt="Mail" width="24px" height="24px"/>
                        <p>berdibekovadilet@gmail.com</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

