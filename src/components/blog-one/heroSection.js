import React from 'react';
import Share from '../../components/Share/Share';

const heroSection = ({ location, data }) => {
    return (
        <>
            <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://app.cyscale.com'
                className='gradientBgBtn dual max-w-282px sm:w-282px md:w-282px lg:w-282px xl:w-282px 2xl:w-282px m-auto block mt-75px text-15px font-normal rounded text-white uppercase text-center pt-19px pb-19px pl-49px pr-49px no-underline'
            >
                START FREE TRIAL
            </a>

            <div className='max-w-588px m-auto '>
                <hr className='bg-black mb-2 mt-60px' />
                <div className='flex justify-between  '>
                    <p className='text-14px mt-3px'>Interesting? Share it</p>
                    <div className='mt-3px' style={{ width: 48 }}>
                        <Share
                            title={data?.frontmatter?.title}
                            permalink={data?.frontmatter?.permalink}
                            description={data?.frontmatter?.description}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default heroSection;
