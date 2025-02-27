import React from 'react';
import LogoSymbol from '../../assets/images/cyscale-logo-symbols.svg';

const History = () => {
    return (
        <>
            <div className='overflow-x-hidden'>
                <div className={`max-w-1366px mx-auto px-8 lg:px-0 py-20 lg:py-32`}>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 lg:border-t-8 lg:border-aboutBorder relative aboutHistory'>
                        <div className='border-t-8 border-aboutBorder lg:border-none'>
                            <div className='-mt-10 lg:-mt-14 hidden lg:block'>
                                <img
                                    src={LogoSymbol}
                                    className='w-37px lg:mb-4'
                                    alt='cyscale-logo-symbols'
                                    loading='lazy'
                                />
                                <span className='block w-36px h-36px rounded-full bg-white border-8 border-aboutBorder'></span>
                            </div>
                            <p className='text-black text-base mt-8'>
                                <strong>2019:</strong>
                            </p>
                            <p className='text-sm text-grey2 mt-8 new-line'>
                                We started development for our CSPM solution: Cyscale Cloud Platform.
                            </p>
                        </div>
                        <div className='border-t-8 border-aboutBorder lg:border-none'>
                            <div className='-mt-10 lg:-mt-16 hidden lg:block'>
                                <img
                                    src={LogoSymbol}
                                    className='w-37px lg:mb-6'
                                    alt='cyscale-logo-symbols'
                                    loading='lazy'
                                />
                                <span className='block w-36px h-36px rounded-full bg-white border-8 border-aboutBorder'></span>
                            </div>
                            <p className='text-black text-base mt-8'>
                                <strong>2020:</strong>
                            </p>
                            <p className='text-sm text-grey2 mt-8 new-line'>
                                Cyscale was named "The Best Technology Startup in 2020" in the InnovX accelerator
                                program. In addition, the European Union awarded the company with the Seal of Excellence
                                for innovation in cloud security. We set the record on{' '}
                                <a
                                    className='text-blue'
                                    href='https://seedblink.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Seedblink
                                </a>{' '}
                                by raising $430k in just 4 hours.
                            </p>
                        </div>
                        <div className='border-t-8 border-aboutBorder lg:border-none'>
                            <div className='-mt-10 lg:-mt-20 hidden lg:block'>
                                <img
                                    src={LogoSymbol}
                                    className='w-37px lg:mb-10'
                                    alt='cyscale-logo-symbols'
                                    loading='lazy'
                                />
                                <span className='block w-36px h-36px rounded-full bg-white border-8 border-aboutBorder'></span>
                            </div>
                            <p className='text-black text-base mt-8'>
                                <strong>2021:</strong>
                            </p>
                            <p className='text-sm text-grey2 mt-8'>
                                Cyscale Cloud Platform empowers Security teams worldwide to take the correct approach
                                and implement a strong Cloud Security Program.
                            </p>
                        </div>
                        <div className='border-t-8 border-aboutBorder lg:border-none'>
                            <div className='-mt-10 lg:-mt-24 hidden lg:block'>
                                <img
                                    src={LogoSymbol}
                                    className='w-37px lg:mb-14'
                                    alt='cyscale-logo-symbols'
                                    loading='lazy'
                                />
                                <span className='block w-36px h-36px rounded-full bg-white border-8 border-aboutBorder'></span>
                            </div>
                            <p className='text-black text-base mt-8'>
                                <strong>2022:</strong>
                            </p>
                            <p className='text-sm text-grey2 mt-8'>
                                Cyscale raises $3.5M in a new seed round led by{' '}
                                <a
                                    className='text-blue'
                                    href='https://www.notion.vc/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Notion Capital
                                </a>
                                ,{' '}
                                <a
                                    className='text-blue'
                                    href='https://seedcamp.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Seedcamp
                                </a>
                                , and{' '}
                                <a
                                    className='text-blue'
                                    href='https://gapminder.vc'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    GapMinder
                                </a>
                                .
                            </p>
                            <p className='text-sm text-grey2 mt-8'>
                                Our team is growing fast. The Security Knowledge Graph™ helps more and more
                                organizations understand their digital footprint, enabling them to secure and protect
                                their most valuable assets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;
