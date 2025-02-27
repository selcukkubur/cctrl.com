import React, { useEffect, useRef, useState } from 'react';
import useScrollTrigger from '../scrollTrigger';
import { useAppLink } from '../../common/links';
import { css } from 'twin.macro';

import NewNavigation from './NewNavigation';
import MobileNavbar from './components/MobileNavbar';
import MobileNavigation from './components/MobileNavigation';
import CustomSearch from '../Search/CustomSearch';
import { useClickOutsideSearch } from '../../hooks/useClickOutsideSearch';
import PlatformTours from '../platform-tours/PlatformTours';

const paddingNav = css`
    padding-left: 2rem;
    padding-right: 2rem;
    @media (min-width: 1536px) {
        padding-left: 10rem;
        padding-right: 10rem;
    }
`;

const NewTopNav = ({ pageName, showLogo = true, location, animatedNavbar }) => {
    const root = useRef();
    const searchRef = useRef(null);
    const trigger = useScrollTrigger();
    const [showBurgerButton, setShowBurgerButton] = useState(pageName !== 'HomePage');
    const [showMenu, setShowMenu] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    const [searchBar, setSearchBar] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const [kModal, setKModal] = useState(false);
    const [platformModal, setPlatformModal] = useState(false);

    const appLink = useAppLink();

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setIsAtTop(scrollTop === 0);

            if (window.scrollY === 0) {
                setShowBanner(true);
                root.current.classList.remove('transparent-bg');
            } else {
                setShowBanner(false);
                root.current.classList.add('transparent-bg');
            }
        };

        if (typeof window !== 'undefined' && root.current) {
            onScroll();
            window.addEventListener('scroll', onScroll);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', onScroll);
            }
        };
    }, []);

    useEffect(() => {
        if (pageName === 'HomePage') {
            const timer = setTimeout(() => setShowBurgerButton(true), 500);
            return () => clearTimeout(timer);
        }
    }, [pageName]);

    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden';
            return () => (document.body.style.overflow = 'unset');
        }
    }, [showMenu]);

    useClickOutsideSearch(searchRef, searchBar, setSearchBar);

    const rootClasses = !trigger ? 'translate-y-0' : '-translate-y-full';

    return (
        <>
            <div
                ref={root}
                style={{ maxWidth: '100vw' }}
                className={`fixed top-0 left-0 block w-full mx-auto z-50 transition duration-300 transform ${rootClasses}`}
            >
                <div tw='container max-w-7xl mx-auto pt-2.5 hidden xl:block' css={paddingNav}>
                    <NewNavigation
                        pageName={pageName}
                        showLogo={showLogo}
                        appLink={appLink}
                        location={location}
                        searchBar={searchBar}
                        setSearchBar={setSearchBar}
                        kModal={kModal}
                        setKModal={setKModal}
                        platformModal={platformModal}
                        setPlatformModal={setPlatformModal}
                    />
                </div>
                {showBanner && animatedNavbar && (
                    <div className='block bg-white px-8'>
                        <div className='container max-w-7xl m-auto'>
                            <div className='flex justify-end'>
                                <p className='text-xs sm:text-sm py-2'>
                                    <strong>Call:</strong>
                                    <span style={{ color: '#5E5E5E' }}> +44 7401 208466</span> &nbsp;&nbsp;&nbsp;
                                    <strong>Email:</strong> <span style={{ color: '#5E5E5E' }}>sales@cyscale.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <div tw='pt-2.5 px-8 block xl:hidden'>
                    <MobileNavbar
                        pageName={pageName}
                        showLogo={showLogo}
                        appLink={appLink}
                        showBurgerButton={showBurgerButton}
                        showMenu={showMenu}
                        setShowMenu={setShowMenu}
                        searchBar={searchBar}
                        setSearchBar={setSearchBar}
                    />
                </div>
            </div>
            {searchBar && (
                <div
                    style={{ maxWidth: '100vw' }}
                    className={`fixed left-0 block w-full mx-auto bg-white shadow-2xl transform transition-all`}
                    css={[
                        css`
                            transition-duration: 300ms;
                            z-index: 40;
                        `,
                        animatedNavbar &&
                            css`
                                top: 7.563rem;
                                @media (max-width: 1280px) {
                                    top: ${isAtTop ? '7rem' : !trigger ? '5rem' : 0};
                                }
                            `,
                        !animatedNavbar &&
                            css`
                                top: ${!trigger ? '6.2rem' : 0};
                                @media (max-width: 1280px) {
                                    top: ${!trigger ? '5rem' : 0};
                                }
                            `
                    ]}
                    ref={searchRef}
                >
                    <div tw='container max-w-7xl mx-auto pt-2.5' css={paddingNav}>
                        <CustomSearch searchBar={searchBar} setSearchBar={setSearchBar} />
                    </div>
                </div>
            )}
            {showMenu && <MobileNavigation showMenu={showMenu} setShowMenu={setShowMenu} appLink={appLink} />}
            <PlatformTours
                kModal={kModal}
                setKModal={setKModal}
                platformModal={platformModal}
                setPlatformModal={setPlatformModal}
            />
        </>
    );
};

export default NewTopNav;
