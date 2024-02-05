import React from 'react';

export const About = () => {
    return (
        <div className='my-16 flex justify-between flex-col md:flex-row'>
            <div className='md:w-1/2'>
                <div className='mb-4'>
                    <p className='text-gray-400'>2023 — ✦</p>
                    <p>Front-End Developer @ Cosmos-web</p>
                </div>
                <div className='mb-4'>
                    <p className='text-gray-400'>2022 — 2023</p>
                    <p>Front-End Developer @ MBank (MBusiness)</p>
                </div>
                <div className='mb-4'>
                    <p className='text-gray-400'>2021 — 2022</p>
                    <p>Front-End Developer @ Craft Link</p>
                </div>
                <div className='mb-8'>
                    <p className='text-gray-400'>2017 — 2020</p>
                    <p>UI/UX Designer @ Reliz LTD</p>
                </div>
            </div>
            <div className='md:w-1/2'>
                <div className="mb-8">
                    {/*<h4 className='text-gray-400'>Обо мне</h4>*/}
                    <p>Мой подход к разработке основан на тщательном анализе дизайна, высокой производительности и
                        стремлении к постоянному совершенствованию. Создаю инновационные веб-приложения, которые не только отвечают современным требованиям, но и обеспечивают
                        превосходный пользовательский опыт.
                    </p>
                </div>
                <div>
                    <h4 className='text-gray-400'>Принципы</h4>
                    <p className='mb-4'>- Стремление к созданию кода и интерфейсов, которые обеспечивают высокую производительность.</p>
                    <p className='mb-4'>- Активное стремление к изучению и внедрению новых технологий.</p>
                    <p>- Создание интуитивных и отзывчивых интерфейсов с акцентом на удобство пользователя.</p>
                </div>
            </div>
        </div>
    );
};

