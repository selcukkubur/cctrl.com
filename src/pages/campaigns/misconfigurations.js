import React, { useState } from 'react';
import { Container, Row } from '../../components/atoms/Containers';
import { graphql, useStaticQuery } from 'gatsby';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import { GatsbyImage } from 'gatsby-plugin-image';
import AnimatedNavbarLayout from '../../components/campaigns/AnimatedNavbarLayout';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';
import corner from '../../assets/images/corner-campaigns-iam-security.svg';
import { css } from 'twin.macro';
import HeroImage from '../../assets/images/bg-image-misconfigurations-campaigns.svg';
import { animateScroll } from 'react-scroll';
import Carousel from '../../components/cloud-security-posture-management/Carousel';
import ScrollDown from '../../components/ScrollButton/ScrollDown';
import ServiceHighlight from '../../components/campaigns/ServiceHighlight';
import TourVideo from '../../components/video/TourVideo';

const subtitle = css`
    font-size: 1.625rem;
    line-height: 2rem;
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const Misconfigurations = ({ location }) => {
    const [curr, setCurr] = useState(0);
    const [currImage, setCurrImage] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query MisconfigurationsCampaignQuery {
            continuosProtection: file(relativePath: { eq: "continuos-protection-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            graph: file(relativePath: { eq: "graph-misconfiguration.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            cards: file(relativePath: { eq: "cards-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            standards: file(relativePath: { eq: "standards-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            complianceHistory: file(relativePath: { eq: "compliance-history-cspm.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "csm-whitepaper-bluebird.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
        }
    `);

    const slides = [
        { image: data.cards.childImageSharp.gatsbyImageData, alt: 'Screenshots from cloud security platform' },
        { image: data.standards.childImageSharp.gatsbyImageData, alt: 'Standards view' },
        {
            image: data.complianceHistory.childImageSharp.gatsbyImageData,
            alt: 'Standard view with compliance history graphic'
        }
    ];
    const mobileSlides = [
        { image: data.cards.childImageSharp.gatsbyImageData, alt: 'Screenshots from cloud security platform' },
        { image: data.standards.childImageSharp.gatsbyImageData, alt: 'Standards view' },
        {
            image: data.complianceHistory.childImageSharp.gatsbyImageData,
            alt: 'Standard view with compliance history graphic'
        }
    ];

    return (
        <AnimatedNavbarLayout
            formId={'8543c2b4-5f8e-4df7-9305-aa991806e01f'}
            formTargetId={'#request-demo'}
            location={location}
            title={'Identify and Fix Cloud Misconfigurations Automatically | Cyscale'}
            description={
                'Improve your cloud security posture in minutes. Detect and eliminate critical misconfigurations, policy violations, and mistakes.'
            }
            pageName={'MisconfigurationsCampaign'}
            noIndex={true}
        >
            <div className='bg-zircon pb-16 sm:pb-0 pt-32 lg:pt-40 xl:pt-12 relative'>
                <Container>
                    <Row>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='lg:mt-4 pt-2 md:pt-8 lg:pt-4 max-w-2xl mx-auto lg:mx-0'>
                                <h1
                                    className='text-center lg:text-left text-blue mb-8 font-montserrat font-bold'
                                    css={css`
                                        font-size: 2rem;
                                        @media (min-width: 1024px) {
                                            &:after {
                                                content: '';
                                                display: block;
                                                width: 40%;
                                                height: 6px;
                                                margin-top: 16px;
                                                background-image: linear-gradient(to right, #0f26aa, #ff4a56);
                                            }
                                        }
                                    `}
                                >
                                    Identify and Fix Cloud Misconfigurations
                                </h1>
                                <p
                                    className='text-center lg:text-left text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-hind'
                                    css={css`
                                        color: #484848;
                                    `}
                                >
                                    Automatically improve your cloud security posture. Scan, monitor, and remediate
                                    across AWS, Microsoft Azure, Google Cloud, Alibaba Cloud.
                                </p>
                                <div className='max-w-lg sm:max-w-xl mx-auto lg:mx-0'>
                                    <p className='font-hind text-base mt-8 text-center lg:text-left'>
                                        Get a demo and see Cyscale in action:
                                    </p>
                                    <ServiceHighlight
                                        cssCheckMark={css`
                                            @media (max-width: 483px) {
                                                margin-top: -1.5rem;
                                            }
                                        `}
                                    >
                                        <span className='font-bold'> Always-On Monitoring</span>: Monitor your assets
                                        24/7
                                    </ServiceHighlight>
                                    <ServiceHighlight
                                        cssCheckMark={css`
                                            @media (max-width: 526px) {
                                                margin-top: -1.5rem;
                                            }
                                        `}
                                    >
                                        <span className='font-bold'>Smart Alerts</span>: Contextual alerts for
                                        actionable insights
                                    </ServiceHighlight>
                                    <ServiceHighlight
                                        cssCheckMark={css`
                                            @media (max-width: 639px) {
                                                margin-top: -1.5rem;
                                            }
                                        `}
                                    >
                                        <span className='font-bold'>Quick Remediation</span>: Step-by-step guides to
                                        instant fixes
                                    </ServiceHighlight>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6' id='apply-now'>
                            <div
                                className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 lg:pt-12 pb-0 px-8 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'
                                css={css`
                                    background-color: rgba(255, 255, 255, 0.6);
                                    backdrop-filter: blur(5px);
                                    z-index: 1;
                                `}
                                id='form'
                            >
                                <h2 className='font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0 font-montserrat'>
                                    Book a live demo
                                </h2>
                                {loadingForm && <LoaderContainer minHeight={310} />}
                                <div
                                    style={{ minHeight: 310 }}
                                    id='request-demo'
                                    className={classnames('pb-4', { hidden: loadingForm })}
                                />
                            </div>
                        </div>
                    </Row>
                    <div className='lg:mt-9'>
                        <ScrollDown />
                    </div>
                </Container>
                <div className='absolute bottom-0 right-0 '>
                    <div className='hidden lg:block lg:max-w-2xl'>
                        <img src={HeroImage} alt='' />
                    </div>
                </div>
            </div>
            <TourVideo />
            <Container>
                <div className='pb-8 lg:pt-32 lg:pb-16' id='start'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.continuosProtection.childImageSharp.gatsbyImageData}
                                    alt='Screenshots from cloud security platform'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:pl-16'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat'
                                    css={subtitle}
                                >
                                    Prevent misconfigurations & mistakes
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    A single misconfiguration can have a devastating impact on your cloud security.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Cyscale automatically detects misconfigured services across identity, compute,
                                    storage, networking, container services, managed Kubernetes, and many more.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Get step-by-step remediation guidelines for any finding, so that you can act fast to
                                    reduce your attack surface and prevent incidents.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 my-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.continuosProtection.childImageSharp.gatsbyImageData}
                                    alt='Screenshots from cloud security platform'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='pb-8 lg:py-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat'
                                    css={subtitle}
                                >
                                    Cut through
                                    <br /> the noise
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    Don't waste time chasing false positives. Get contextual alerts when your cloud
                                    assets drift away from established security and compliance standards.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Instead of overwhelming list-based management, Cyscale's Security Knowledge Graph™
                                    makes precise correlations between all your cloud assets and data repositories to
                                    automatically pinpoint critical security improvements.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.graph.childImageSharp.gatsbyImageData}
                                    alt='Graph with alert and control details'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='py-8 lg:py-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='max-w-xl'>
                                <Carousel
                                    autoSlide={autoSlide}
                                    setAutoSlide={setAutoSlide}
                                    cspmCarousel
                                    curr={currImage}
                                    setCurr={setCurrImage}
                                >
                                    {slides.map((s, index) => {
                                        return (
                                            <div
                                                className='mt-12 block'
                                                css={css`
                                                    width: 100%;
                                                    height: 100%;
                                                `}
                                                onMouseEnter={() => setAutoSlide(false)}
                                                onMouseLeave={() => setAutoSlide(true)}
                                                role='button'
                                                tabIndex='-1'
                                                onClick={() => {}}
                                                onKeyDown={() => {}}
                                                key={index}
                                            >
                                                <GatsbyImage image={s.image} alt={s.alt} />
                                            </div>
                                        );
                                    })}
                                </Carousel>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:pl-16'>
                                <h2
                                    className='font-bold text-primary border-title-partly font-montserrat'
                                    css={subtitle}
                                >
                                    Out-of-the-box actionable policies and standards
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2 font-hind'>
                                    In-app security standards and organizational security policy templates for CIS Cloud
                                    Benchmarks, ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, NIST, and many more help your
                                    team with internal or external audits.
                                </p>
                                <p className='leading-normal text-base text-gray py-2 font-hind'>
                                    Automated and continuous assessment of your cloud compliance, with custom Controls
                                    that tap into our Security Knowledge Graph to deliver the security and compliance
                                    checks that matter most to your organization.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <div className='max-w-xl'>
                                    <Carousel
                                        autoSlide={autoSlide}
                                        setAutoSlide={setAutoSlide}
                                        cspmCarousel
                                        curr={curr}
                                        setCurr={setCurr}
                                    >
                                        {mobileSlides.map((s, index) => {
                                            return (
                                                <div
                                                    className='mt-12 block'
                                                    css={css`
                                                        width: 100%;
                                                        height: 100%;
                                                    `}
                                                    onMouseEnter={() => setAutoSlide(false)}
                                                    onMouseLeave={() => setAutoSlide(true)}
                                                    role='button'
                                                    tabIndex='-1'
                                                    onClick={() => {}}
                                                    onKeyDown={() => {}}
                                                    key={index}
                                                >
                                                    <GatsbyImage image={s.image} alt={s.alt} />
                                                </div>
                                            );
                                        })}
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-gradient-to-b from-selago to-white relative z-10' id='confidence'>
                <img
                    src={corner}
                    width={300}
                    className='hidden lg:block absolute top-0 right-0 m-0 z-20'
                    alt=''
                    loading='lazy'
                />
                <Container>
                    <div className='py-8 md:py-12 lg:py-20'>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-2xl mb-20'>
                            <h2 className='font-bold text-primary border-title-partly font-montserrat' css={subtitle}>
                                Automate cloud misconfiguration
                                <br />
                                checks and eliminate manual work
                            </h2>
                        </div>
                        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-3xl'>
                            <Row className='lg:gap-20'>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>Analyze cloud misconfigurations</strong>
                                        <br />
                                        Analyze misconfigurations against the most popular industry and regulatory
                                        frameworks, including a wide range of CIS control benchmarks, ISO 27001, and SOC
                                        2.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>Ensure security and compliance</strong>
                                        <br />
                                        Prove alignment with the highest industry standards, enforce policies
                                        consistently across cloud providers and scale compliance efforts without
                                        overhead.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>400+ unique configuration controls</strong>
                                        <br />
                                        Unique and customizable controls, including authentication, data protection,
                                        logging and monitoring, network configurations, system integrity, and more.
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <p className='leading-normal text-base text-gray mb-6 font-hind'>
                                        <strong className='font-montserrat'>Prioritize misconfiguration risk</strong>
                                        <br />
                                        Contextual prioritization and remediation through our Security Knowledge Graph,
                                        which surfaces crucial issues based on the correlation of insights from a deep
                                        understanding of all your interlinked assets.
                                    </p>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='sm:pt-12 pb-32'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' loading='lazy' />
                        <h2 className='text-center px-2 mt-4 mb-2 font-montserrat font-bold text-lg lg:text-2xl'>
                            Get peace of mind with automated cloud security
                        </h2>
                        <div className='mt-10 w-auto inline-block'>
                            <button
                                onClick={() => animateScroll.scrollToTop()}
                                css={css`
                                    padding: 0.625rem 2.5rem;
                                `}
                                className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind cursor-pointer'
                            >
                                BOOK YOUR DEMO
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </AnimatedNavbarLayout>
    );
};

export default Misconfigurations;
