import React from 'react';
import { ISO27001, AicpaSoc2, CisBenchmarks, EuEuropeanGdpr, USHipaa, PciDss, Nist } from './images';
const Cloud = ({ title, sectionName, f_image, data, id }) => {
    return (
        <>
            <div
                className={`block w-full ${
                    sectionName === 'topRisks' ? 'pt-100px lg:pt-0 pb-172px' : 'pt-71px pb-71px'
                }`}
                id={id}
            >
                <div className='max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 pt-40 sm:pt-0'>
                        {!!title && (
                            <div>
                                <h2 className='font-semibold   text-blue text-24px sm:text-34px leading-normal lg:max-w-sm sectionTitle font-montserrat'>
                                    {title}
                                </h2>
                            </div>
                        )}
                        {!!sectionName && sectionName === 'cloudBenefits' && <div className='hidden md:block'></div>}

                        <div className={`${!!sectionName && sectionName !== 'cloudBenefits' && 'col-span-2'}`}>
                            {!!sectionName && sectionName === 'compliance' && (
                                <div className='flex flex-row justify-between items-center lg:justify-end flex-wrap space-y-6 lg:space-y-0 lg:space-x-6'>
                                    <ISO27001 />
                                    <AicpaSoc2 />
                                    <CisBenchmarks />
                                    <EuEuropeanGdpr />
                                    <USHipaa />
                                    <PciDss />
                                    <Nist />
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className={
                            !!sectionName && sectionName === 'cloudBenefits'
                                ? 'flex lg:mt-24'
                                : 'flex flex-wrap items-center lg:flex-nowrap lg:mt-36'
                        }
                    >
                        {!!f_image && (
                            <div
                                className={`w-full lg:w-2/5 ${sectionName === 'systemGov' ? 'order-1 lg:order-2' : ''}`}
                            >
                                <img
                                    loading='lazy'
                                    src={f_image}
                                    className={`${
                                        sectionName === 'SKGSection'
                                            ? 'mb-30px sm:w-235px'
                                            : sectionName === 'systemGov'
                                            ? 'sm:w-96 lg:mt-200px'
                                            : 'sm:h-72 lg:mt-138px'
                                    }`}
                                    alt={title}
                                />
                            </div>
                        )}
                        {sectionName === 'SKGBeneifts' || sectionName === 'topRisks' ? (
                            <div className='w-full lg:w-2/5'></div>
                        ) : (
                            ''
                        )}
                        <div className='w-full lg:w-3/5'>
                            <div
                                className={`grid grid-cols-1 md:grid-cols-2 gap-6  ${
                                    sectionName === 'systemGov' ? 'order-2 lg:order-1' : ''
                                }`}
                            >
                                {data.map((content, index) => (
                                    <div key={index} className='text-16px relative text-black leading-normal'>
                                        {!!content.title && (
                                            <h3 className='font-semibold  text-16px font-medium mb-5px'>
                                                {content.title}
                                            </h3>
                                        )}
                                        {!!content.divider && <div className='mb-20px'>{content.divider}</div>}
                                        <p
                                            className={
                                                !!sectionName && sectionName === 'cloudBenefits'
                                                    ? 'new-line mb-50px'
                                                    : 'new-line'
                                            }
                                        >
                                            {content.description}
                                        </p>
                                        {!!content.lintText && (
                                            <div className='block absolute bottom-0 left-0'>
                                                <a
                                                    href={content.linkURL}
                                                    className='uppercase text-blue underline text-16px hover:no-underline hover:text-red font-medium'
                                                >
                                                    {content.lintText}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cloud;
