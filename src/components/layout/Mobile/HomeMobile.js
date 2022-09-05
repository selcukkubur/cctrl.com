import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../../../assets/images/logo.svg';
import menuClose from '../../../assets/images/menuCloseBlack.svg';
import IconUser from '../../../assets/images/icon-user.svg';
import IconTag from '../../../assets/images/icon-tag.svg';
import { css } from 'twin.macro';
import PlatformMobile from './PlatformMobile';
import SolutionsMobile from './SolutionsMobile';
import ResourcesMobile from './ResourcesMobile';
import CompanyMobile from './CompanyMobile';
import backArrow from '../../../assets/images/backArrow.svg';
import downArrow from '../../../assets/images/downArrowIcon.svg';
import styled from '@emotion/styled';

export const logoStyle = css`
    width: 11rem;
    height: 2.534rem;

    @media (max-width: 480px) {
        width: 7.813rem;
        height: 'auto';
    }
`;

export const HeaderLogo = styled.img`
    ${logoStyle}
`;

export const borderBottomItemNav = css`
    border-bottom: 1px solid #e2e2e2;
`;

const HomeMobile = ({ showMenu, setShowMenu, appLink }) => {
    console.log(appLink);
    const [activeMenu, setActiveMenu] = useState('main');

    return (
        <div
            className='bg-white w-screen fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll'
            style={{ zIndex: 10000 }}
        >
            <div className='relative min-h-screen pt-4'>
                <div className='flex justify-between pt-2.5 pb-6 px-8 bg-white' css={borderBottomItemNav}>
                    {activeMenu === 'main' && (
                        <Link to='/' className='inline-block'>
                            <HeaderLogo src={logo} alt='Cyscale' />
                        </Link>
                    )}
                    {activeMenu !== 'main' && (
                        <div className='inline-block flex' onClick={() => setActiveMenu('main')}>
                            <img src={backArrow} alt='' />{' '}
                            <span css={logoStyle} className={'flex items-center text-lg pt-0.5'}>
                                Back
                            </span>
                        </div>
                    )}
                    <button type='button' className='inline-block' onClick={() => setShowMenu(!showMenu)}>
                        <img src={menuClose} alt='toggle menu' />
                    </button>
                </div>
                {activeMenu === 'main' && (
                    <div className='bg-white'>
                        <div
                            className='py-4 px-8 flex justify-between'
                            css={borderBottomItemNav}
                            onClick={() => setActiveMenu('platform')}
                        >
                            <span> Platform </span>
                            <img src={downArrow} alt='' />
                        </div>
                        <div
                            className='py-4 px-8 flex justify-between'
                            css={borderBottomItemNav}
                            onClick={() => setActiveMenu('solutions')}
                        >
                            Solutions
                            <img src={downArrow} alt='' />
                        </div>
                        <div
                            className='py-4 px-8 flex justify-between'
                            css={borderBottomItemNav}
                            onClick={() => setActiveMenu('resources')}
                        >
                            Resources
                            <img src={downArrow} alt='' />
                        </div>
                        <div
                            className='py-4 px-8 flex justify-between'
                            css={borderBottomItemNav}
                            onClick={() => setActiveMenu('company')}
                        >
                            Company
                            <img src={downArrow} alt='' />
                        </div>
                        <div className='flex px-8 mt-4'>
                            <img src={IconUser} alt='' />
                            <a className='ml-2' href={appLink} target='_blank' rel='noopener noreferrer'>
                                Start Free Trial
                            </a>
                        </div>
                        <div className='flex mt-3 px-8'>
                            <img src={IconTag} alt='' />
                            <Link className='ml-2' to='/pricing/'>
                                Pricing
                            </Link>
                        </div>
                    </div>
                )}
                {activeMenu === 'platform' && <PlatformMobile />}
                {activeMenu === 'solutions' && <SolutionsMobile />}
                {activeMenu === 'resources' && <ResourcesMobile />}
                {activeMenu === 'company' && <CompanyMobile />}
                <div className='px-8 mb-3 w-full bg-white absolute bottom-0'>
                    <Link
                        to='/request-demo'
                        className='gradientBgBtn block font-medium rounded text-white text-center py-4 hover:no-underline no-underline max-w-md'
                    >
                        Request Demo
                    </Link>
                    <Link className='block mt-3' to='/blog/'>
                        Cloud Security Blog
                    </Link>
                    <Link className='block my-3' to='/contact-us/'>
                        Contact
                    </Link>
                    <div>
                        <a className='' href='https://app.cyscale.com' target='_blank' rel='noopener noreferrer'>
                            Login
                        </a>{' '}
                        |{' '}
                        <a className='' href={appLink} target='_blank' rel='noopener noreferrer'>
                            Sign Up
                        </a>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMobile;
