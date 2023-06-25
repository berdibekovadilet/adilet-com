import React from 'react';

export const About = () => {
    return (
        <div className='my-16 flex justify-between flex-col md:flex-row'>
            <div className='md:w-1/2'>
                <div className='mb-4'>
                    <p className='text-gray-400'>2022 — ✦</p>
                    <p>Front-End Developer @ MBank (MBusiness)</p>
                </div>
                <div className='mb-4'>
                    <p className='text-gray-400'>2020 — 2022</p>
                    <p>Front-End Developer @ Craft Link</p>
                </div>
                <div className='mb-8'>
                    <p className='text-gray-400'>2018 — 2020</p>
                    <p>UI/UX Designer @ Reliz LTD</p>
                </div>
            </div>
            <div className='md:w-1/2'>
                <div className="mb-8">
                    <h4 className='text-gray-400'>About</h4>
                    <p>I deliver progressive solutions from concept to launch. Currently at MBusiness, I am a key player
                        in developing B2B banking solutions. My responsibilities include creating responsive web designs
                        and streamlining online banking functionalities. Passionate about e-commerce, I am actively
                        seeking opportunities to apply my expertise in building advanced online stores using a
                        cutting-edge technology stack.
                    </p>
                </div>
                <div>
                    <h4 className='text-gray-400'>Principles</h4>
                    <p className='mb-4'>- Build Efficiently: Optimize solutions for performance and aesthetics.</p>
                    <p className='mb-4'>- Embrace Progress: Layer enhancements on a solid foundation for optimal
                        functionality.</p>
                    <p>- Prioritize User Experience: Craft intuitive and responsive interfaces.</p>
                </div>
            </div>
        </div>
    );
};

