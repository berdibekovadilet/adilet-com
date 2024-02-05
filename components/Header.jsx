import React, {useState} from 'react';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='flex justify-between my-8'>
            <p className="hidden md:flex">Adilet Berdibekov</p>
            <div className="hidden md:flex flex-col">
                <a href="https://wa.me/+996702324322" target="_blank" rel="noopener" className='hover:underline underline-offset-8'>
                    <p className='mb-3'>whatsapp</p>
                </a>
                <a href="https://t.me/adiletberdibekov" target="_blank" rel="noopener" className='hover:underline underline-offset-8'>
                    <p className='mb-3'>telegram</p>
                </a>
                <a href="mailto:berdibekovadilet@gmail.com" target="_blank" rel="noopener"
                   className='hover:underline underline-offset-8'>
                    <p>email</p>
                </a>
            </div>
            <div className='flex gap-6'>
                <a href="/files/CV_Adilet_Frontend.pdf" target="_blank" rel="noopener"
                   className='hover:underline underline-offset-8'>
                    <div className='flex items-center gap-1'>
                        <p>Резюме CV</p>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                             stroke-linecap="round"
                             stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                            <desc></desc>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="17" y1="7" x2="7" y2="17"></line>
                            <polyline points="8 7 17 7 17 16"></polyline>
                        </svg>
                    </div>
                </a>
                <a href="https://github.com/berdibekovadilet" target="_blank" rel="noopener"
                   className='hover:underline underline-offset-8'>
                    <div className='flex items-center gap-1'>
                        <p>Github</p>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                             stroke-linecap="round"
                             stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                            <desc></desc>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="17" y1="7" x2="7" y2="17"></line>
                            <polyline points="8 7 17 7 17 16"></polyline>
                        </svg>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/adilet-berdibekov/" target="_blank" rel="noopener"
                   className='hover:underline underline-offset-8'>
                    <div className='flex items-center gap-1'>
                        <p>LinkedIn</p>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                             stroke-linecap="round"
                             stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                            <desc></desc>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="17" y1="7" x2="7" y2="17"></line>
                            <polyline points="8 7 17 7 17 16"></polyline>
                        </svg>
                    </div>
                </a>
            </div>
        </nav>
    );
};

