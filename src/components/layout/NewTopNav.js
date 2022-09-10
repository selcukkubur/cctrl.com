import React, { useEffect, useRef, useState } from 'react';
import useScrollTrigger from '../scrollTrigger';
import { useAppLink } from '../../common/links';
import { css } from 'twin.macro';

import NewNavigation from './NewNavigation';
import MobileNavbar from './components/MobileNavbar';
import MobileNavigation from './components/MobileNavigation';

const paddingNav = css`
    padding-left: 2rem;
    padding-right: 2rem;
    @media (min-width: 1536px) {
        padding-left: 10rem;
        padding-right: 10rem;
    }
`;

const NewTopNav = ({ pageName, showLogo = true, location }) => {
    const root = useRef();
    const trigger = useScrollTrigger();
    const [showBurgerButton, setShowBurgerButton] = useState(pageName !== 'HomePage');
    const [showMenu, setShowMenu] = useState(false);
    const appLink = useAppLink();

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY === 0) {
                root.current.classList.remove('transparent-bg');
            } else {
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

    const rootClasses = !trigger ? 'translate-y-0' : '-translate-y-full';

    return (
        <>
            <div
                ref={root}
                style={{ maxWidth: '100vw' }}
                className={`fixed top-0 left-0 block w-full mx-auto z-20 transition duration-300 transform ${rootClasses}`}
            >
                <div tw='container max-w-7xl mx-auto pt-2.5 hidden xl:block' css={paddingNav}>
                    <NewNavigation pageName={pageName} showLogo={showLogo} appLink={appLink} location={location} />
                </div>
                <div tw='pt-2.5 px-8 block xl:hidden'>
                    <MobileNavbar
                        pageName={pageName}
                        showLogo={showLogo}
                        appLink={appLink}
                        showBurgerButton={showBurgerButton}
                        showMenu={showMenu}
                        setShowMenu={setShowMenu}
                    />
                </div>
            </div>
            {showMenu && <MobileNavigation showMenu={showMenu} setShowMenu={setShowMenu} appLink={appLink} />}
        </>
    );
};

export default NewTopNav;
