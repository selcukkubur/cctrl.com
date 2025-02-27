import React, { useState } from 'react';
import logo from '../../../assets/images/logo.svg';
import classNames from 'classnames';
import menuCloseCookiesModal from '../../../assets/images/menuCloseCookiesModal.svg';
import collapse from '../../../assets/images/collapse.svg';
import expand from '../../../assets/images/expand.svg';
import FocusLock from 'react-focus-lock';
import { useCookies } from 'react-cookie';
import { cookieConsentKey } from '../../../common/constants';
import PrivacyAndCookieInfo from './PrivacyAndCookieInfo';

const dataModal = [
    {
        title: 'Strictly Necessary',

        content:
            'These cookies are required to enable basic website functionality and cannot be switched off. Cyscale processes any personal data collected through these cookies on the basis of legitimate interest.'
    },
    {
        title: 'Performance & Analytics',

        content:
            'These cookies help us and our third-party service providers understand how you interact with our website and how the website performs. Some of the data collected here is aggregated and thus anonymised, while some of the data enables us to track your specific usage. To the extent that Cyscale processes and collects any personal data through these cookies, it does so on the basis of consent.'
    }
];

const PerformanceAndAnalyticsSwitch = ({ setPerformanceAndAnalytics, performanceAndAnalytics }) => {
    return (
        <label className='flex items-center cursor-pointer ml-auto'>
            <div className='relative'>
                <input
                    type='checkbox'
                    className='sr-only'
                    onChange={() => setPerformanceAndAnalytics(!performanceAndAnalytics)}
                    defaultChecked={performanceAndAnalytics}
                    role='switch'
                />
                <div
                    className={`w-10 h-4 block ${
                        performanceAndAnalytics ? 'bg-switch-selected' : 'bg-switch-unselected'
                    } rounded-full shadow-inner`}
                ></div>
                <div
                    className={`dot absolute w-6 h-6 ${
                        performanceAndAnalytics ? 'bg-dot-switch-selected' : 'bg-aboutBorder'
                    } rounded-full shadow -left-1 -top-1 transition`}
                ></div>
            </div>
        </label>
    );
};

const ConfirmButtons = ({
    paddingY,
    marginRight,
    justify,
    setCookiesModal,
    setCookiesBanner,
    performanceAndAnalytics,
    cookiesOptions
}) => {
    const [, setCookie] = useCookies();

    const confirmMyChoices = () => {
        setCookie(cookieConsentKey, { performanceAndAnalytics }, { ...cookiesOptions });
        setCookiesModal(false);
        setCookiesBanner(false);
    };

    const acceptAllCookies = () => {
        setCookie(cookieConsentKey, { performanceAndAnalytics: true }, { ...cookiesOptions });
        setCookiesModal(false);
        setCookiesBanner(false);
    };

    return (
        <div className={`flex justify-${justify} items-center h-full`}>
            <button
                className={`rounded border text-black text-center py-3 px-${paddingY} w-42 h-auto cookies-button`}
                onClick={confirmMyChoices}
            >
                Confirm My Choices
            </button>
            <button
                className={`rounded bg-red text-white text-center py-3 px-${paddingY} w-42 ml-4 ${
                    marginRight === 6 ? 'mr-6' : ''
                } cookies-button`}
                onClick={acceptAllCookies}
            >
                Accept Cookies
            </button>
        </div>
    );
};

const CookiesModal = ({
    setCookiesModal,
    cookiesModal,
    setCookiesBanner,
    performanceAndAnalytics,
    setPerformanceAndAnalytics,
    cookiesOptions
}) => {
    const [active, setActive] = useState(0);

    return (
        <div
            className='bg-white relative w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl sm:rounded-lg cookies-modal'
            role='dialog'
            aria-modal='true'
        >
            <FocusLock>
                <div>
                    <button
                        type='button'
                        className='top-6 right-6 inline-block absolute cursor-pointer'
                        onClick={() => setCookiesModal(!cookiesModal)}
                    >
                        <img src={menuCloseCookiesModal} alt='toggle menu' width={15} height={15} />
                    </button>
                    <div className='flex justify-center pt-8 w-full'>
                        <img className='block headerLogo w-28' src={logo} alt='Cyscale' />
                    </div>
                    <div className='flex justify-center mt-3 w-full'>
                        <h1 className='text-grey2 text-2xl'>Privacy Preference Center</h1>
                    </div>
                </div>

                <div className='overflow-x-auto content-modal-container mt-4 sm:mt-8 mb-24'>
                    {dataModal.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='col-span-12 mb-0 p-4 relative border-element-modal rounded-lg m-4'
                            >
                                <div className='flex'>
                                    <button
                                        onClick={() => setActive((s) => (s === index ? null : index))}
                                        className='bg-white rounded-full w-6 h-6 pt-px flex items-center justify-center absolute top-4 left-4 hover:opacity-80 transition-opacity'
                                    >
                                        <img
                                            className={classNames('transform transition-all', {
                                                '-rotate-90': active !== index,
                                                'rotate-270': active === index
                                            })}
                                            src={active === index ? collapse : expand}
                                            alt='decoration'
                                            width={18}
                                            height={18}
                                        />
                                    </button>
                                    <h3 className='text-lg text-black mb-0 pl-8 leading-snug cursor-pointer my-auto'>
                                        <button onClick={() => setActive((s) => (s === index ? -1 : index))}>
                                            {item.title}{' '}
                                        </button>
                                    </h3>

                                    {index === 0 ? (
                                        <p className='text-sm my-auto ml-auto text-blue'>
                                            <strong>Always Active</strong>
                                        </p>
                                    ) : (
                                        <PerformanceAndAnalyticsSwitch
                                            setPerformanceAndAnalytics={setPerformanceAndAnalytics}
                                            performanceAndAnalytics={performanceAndAnalytics}
                                        />
                                    )}
                                </div>
                                <p
                                    className={classNames('text-black mt-4 ml-8', {
                                        block: active === index,
                                        hidden: active !== index
                                    })}
                                >
                                    <p className='mb-2 text-sm text-grey2'>{item.content}</p>
                                </p>
                            </div>
                        );
                    })}
                    <div className='block sm:hidden px-4 mt-8 pb-8'>
                        <PrivacyAndCookieInfo />
                    </div>
                    <div className='hidden sm:block bottom-0 absolute h-24 w-full bg-white border-t-confirm-buttons rounded-b-lg'>
                        <ConfirmButtons
                            paddingY={6}
                            marginRight={6}
                            justify={'end'}
                            setCookiesModal={setCookiesModal}
                            setCookiesBanner={setCookiesBanner}
                            performanceAndAnalytics={performanceAndAnalytics}
                            cookiesOptions={cookiesOptions}
                        />
                    </div>
                </div>
                <div className='sm:hidden bottom-0 fixed h-24 w-full bg-white border-t-confirm-buttons'>
                    <ConfirmButtons
                        paddingY={2}
                        justify={'center'}
                        setCookiesModal={setCookiesModal}
                        setCookiesBanner={setCookiesBanner}
                        performanceAndAnalytics={performanceAndAnalytics}
                        cookiesOptions={cookiesOptions}
                    />
                </div>
            </FocusLock>
        </div>
    );
};

export default CookiesModal;
