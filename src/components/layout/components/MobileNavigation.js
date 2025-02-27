import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../../../assets/images/logo.svg';
import menuClose from '../icons/menuCloseBlack.svg';
import IconUser from '../icons/icon-user.svg';
import IconTag from '../icons/icon-tag.svg';
import PlatformMobile from './Platform/PlatformMobile';
import SolutionsMobile from './Solutions/SolutionsMobile';
import ResourcesMobile from './Resources/ResourcesMobile';
import CompanyMobile from './Company/CompanyMobile';
import backArrow from '../icons/backArrow.svg';
import downArrow from '../icons/icon-down-carret.svg';
import { navigation } from '../nav';
import { borderBottomItemNavStyle, logoStyle, HeaderLogo } from '../style';

const MobileItemNav = ({ item, setActiveMenu }) => {
    return (
        <div
            className='py-4 px-8 flex justify-between'
            css={borderBottomItemNavStyle}
            onClick={() => setActiveMenu(item)}
            tabIndex='-1'
            onKeyPress={() => {}}
            role='presentation'
        >
            <span className='capitalize'>{item}</span>
            <img src={downArrow} alt='' />
        </div>
    );
};

const MobileNavigation = ({ showMenu, setShowMenu, appLink }) => {
    const [activeMenu, setActiveMenu] = useState('main');

    return (
        <div
            className='bg-white w-screen fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll'
            style={{ zIndex: 10000 }}
        >
            <div className='relative min-h-screen pt-4'>
                <div className='flex justify-between pt-2.5 pb-6 px-8 bg-white' css={borderBottomItemNavStyle}>
                    {activeMenu === 'main' && (
                        <Link to='/' className='inline-block'>
                            <HeaderLogo src={logo} alt='Cyscale' />
                        </Link>
                    )}
                    {activeMenu !== 'main' && (
                        <div
                            className='inline-block flex'
                            onClick={() => setActiveMenu('main')}
                            tabIndex='-1'
                            onKeyPress={() => {}}
                            role='presentation'
                        >
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
                    <div className='bg-white pb-48'>
                        {Object.keys(navigation).map((item, key) => {
                            return <MobileItemNav item={item} key={key} setActiveMenu={setActiveMenu} />;
                        })}
                        <div className='flex px-8 mt-4'>
                            <img src={IconUser} alt='' />
                            <Link className='ml-2' to='/free-trial/'>
                                Start Free Trial
                            </Link>
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
                <div className='px-8 mb-3 w-full bg-white fixed -bottom-4'>
                    <Link
                        to='/request-demo/'
                        className='gradientBgBtn block font-medium rounded text-white text-center py-4 hover:no-underline no-underline max-w-sm'
                    >
                        BOOK A DEMO
                    </Link>
                    <Link className='block mt-3' to='/blog/'>
                        Cloud Security Blog
                    </Link>
                    <Link className='block my-3' to='/contact-us/'>
                        Contact
                    </Link>
                    <div className='pb-5'>
                        <a href='https://app.cyscale.com' target='_blank' rel='noopener noreferrer'>
                            Login
                        </a>{' '}
                        |{' '}
                        <a href={appLink} target='_blank' rel='noopener noreferrer'>
                            Sign Up
                        </a>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavigation;
