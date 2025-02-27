import React from 'react';
import Layout from '../../components/layout/CleanLayout';
import { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link as GatsbyLink, Link, useStaticQuery } from 'gatsby';
import ChallengesIcon from '../../assets/images/challenges-icon.svg';
import ResultsIcon from '../../assets/images/results-icon.svg';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';
import { topArticles } from '../products/cnapp';
import { Container } from '../../components/atoms/Containers';
import { ctaTransition, hrStyle, Subtitle, subtitleColor, textColor } from '../../assets/css/styles';
import { hoverButtonColorStyle, widthFitStyle } from '../../components/layout/style';
import classnames from 'classnames';
import useScrollTrigger from '../../components/scrollTrigger';
import useStickyElement from '../../hooks/useStickyElement';

const SmartFintech = ({ location }) => {
    const trigger = useScrollTrigger();

    const data = useStaticQuery(graphql`
        query Whitepaper {
            whitepaperCover: file(relativePath: { eq: "whitepaper-cover-blog.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 111, height: 162, layout: FIXED)
                }
            }
            cover: file(relativePath: { eq: "smart-fintech-cover.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            logo: file(relativePath: { eq: "smart-fintech-logo.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 206, layout: CONSTRAINED)
                }
            }
            alexQuote: file(relativePath: { eq: "alex-cociu-quote.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 150, layout: CONSTRAINED)
                }
            }
            quotes: file(relativePath: { eq: "quotes.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 41, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "csm-whitepaper-bluebird.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
        }
    `);

    const { isTop, parentRef, stickyRef } = useStickyElement();

    return (
        <Layout
            location={location}
            pageName='SmartFintech'
            title='Smart Fintech Case Study | Cloud Security & Compliance - Cyscale'
            description={`Discover how Smart Fintech, Romania's first authorized open banking TPP, improved cloud security, IAM visibility, and compliance by leveraging Cyscale's powerful platform for monitoring and alerting on cloud misconfigurations.`}
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /case-studies/smart-fintech
            </div>
            <div className='hidden' data-title>
                Smart Fintech Case Study | Cloud Security & Compliance - Cyscale
            </div>
            <div className='hidden' data-description>
                Discover how Smart Fintech, Romania's first authorized open banking TPP, improved cloud security, IAM
                visibility, and compliance by leveraging Cyscale's powerful platform for monitoring and alerting on
                cloud misconfigurations.
            </div>
            <div className='hidden' data-category>
                case studies
            </div>
            <div className='pt-28 lg:pt-32'>
                <Container>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 lg:col-span-6'>
                            <p
                                className='font-montserrat font-bold text-sm'
                                css={css`
                                    color: #079bee;
                                `}
                            >
                                CASE STUDY
                            </p>
                            <h1
                                className='font-montserrat font-bold mt-4'
                                css={css`
                                    font-size: 1.875rem;
                                    line-height: 2.313rem;
                                    color: #1d2639;
                                `}
                            >
                                Smart Fintech uses Cyscale to gain IAM visibility and ensure cloud security and
                                compliance
                            </h1>
                            <p className='font-hind text-base font-normal mt-4' css={textColor}>
                                Smart Fintech, the first authorized open banking third party provider (TPP) in Romania,
                                seeks to improve its cloud security posture. Cyscale ensures high IAM visibility and a
                                robust alerting mechanism for cloud misconfigurations.
                            </p>
                            <GatsbyImage
                                image={data.logo.childImageSharp.gatsbyImageData}
                                alt='Smart Fintech Logo'
                                className='mt-4'
                            />
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <GatsbyImage image={data.cover.childImageSharp.gatsbyImageData} alt='Cover' />
                        </div>
                    </div>
                </Container>
            </div>
            <div className='container max-w-7xl mx-auto xl:flex xl:pr-16'>
                <div className='max-w-4xl xl:max-w-5xl mx-auto xl:mx-0 px-8'>
                    <div className='grid grid-cols-12 gap-1 mt-12 lg:mt-20'>
                        <div className='col-span-12 lg:col-span-6'>
                            <p className='font-montserrat text-lg font-bold' css={subtitleColor}>
                                Challenges
                            </p>
                            <div className='flex items-center mt-4'>
                                <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                <p className='font-hind text-base mt-1' css={subtitleColor}>
                                    Difficulty identifying permission drifts
                                </p>{' '}
                            </div>
                            <div className='flex items-start mt-2'>
                                <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                <p className='font-hind text-base' css={subtitleColor}>
                                    Manual configurations checks, which slow down the development team
                                </p>{' '}
                            </div>
                            <div className='flex items-start lg:items-center mt-2'>
                                <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                <p className='font-hind text-base' css={subtitleColor}>
                                    A time-consuming compliance process
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-4 lg:mt-0'>
                            <p className='font-montserrat text-lg font-bold' css={subtitleColor}>
                                Results
                            </p>
                            <div className='flex items-start lg:items-center mt-4'>
                                <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                <p className='font-hind text-base mt-0 lg:mt-1' css={subtitleColor}>
                                    Enhanced visibility into users’ roles and privileges
                                </p>{' '}
                            </div>
                            <div className='flex items-start mt-2'>
                                <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                <p className='font-hind text-base' css={subtitleColor}>
                                    Implementation of a misconfigurations alert system for cloud security
                                </p>{' '}
                            </div>
                            <div className='flex items-start mt-2'>
                                <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                <p className='font-hind text-base' css={subtitleColor}>
                                    Improved compliance through better IAM visibility and control
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className='mt-8 p-3 rounded-md'
                        css={css`
                            background-color: #fafafb;
                        `}
                    >
                        <p className='text-base font-medium font-hind' css={textColor}>
                            Smart Fintech is the first open banking third party provider (TPP) in Romania, authorized by
                            the country’s national bank (NBR). They make full use of cloud infrastructure for their
                            products, that focus on the future of Account2Account Payments and Account Interrogation
                            solutions. Currently, the company develops multiple cloud-native applications to serve their
                            partners and end-customers. In a very dynamic environment, they seek to improve their cloud
                            security posture and protect their customer’s data.
                        </p>
                    </div>
                    <Subtitle css={subtitleColor}>Problem</Subtitle>
                    <p className='text-base font-hind mt-8' css={textColor}>
                        The company was looking for a solution to help them achieve compliance and ensure their cloud
                        environment is secure. Identity and access management was a focal point for Smart Fintech, since
                        they identified it as a significant risk area. In addition, they needed an alert system for
                        cloud misconfigurations so that they could leverage the development speed promised by the cloud,
                        without compromising on security.
                    </p>
                    <div
                        className='grid grid-cols-12 gap-1 mt-4 p-3 rounded-md'
                        css={css`
                            background-color: #f5f9ff;
                        `}
                    >
                        <div className='col-span-12 lg:col-span-2'>
                            <div className='mx-auto lg:mx-0 block w-24'>
                                <GatsbyImage image={data.alexQuote.childImageSharp.gatsbyImageData} alt='' />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-10 mt-4 lg:mt-0'>
                            <p className='text-lg font-semibold font-hind' css={subtitleColor}>
                                Cyscale is eliminating the need to ask the team for tedious configuration reports,
                                greatly improving our visibility and helping us understand things we didn’t know.
                            </p>{' '}
                            <p className='text-base font-hind mt-4' css={subtitleColor}>
                                Alex Cociu, Risk and Compliance Officer at Smart Fintech
                            </p>
                        </div>
                    </div>
                    <Subtitle css={subtitleColor}>Solution</Subtitle>
                    <div className='grid grid-cols-12 gap-0 lg:gap-8 mt-8 rounded-md'>
                        <div className='col-span-12 lg:col-span-6'>
                            <p className='font-hind text-base' css={textColor}>
                                Cyscale provided Smart Fintech with a comprehensive overview of users’ roles and
                                privileges across multiple cloud accounts. Moreover, using the Cyscale platform, Smart
                                Fintech can identify users that have too many privileges.{' '}
                                <strong>
                                    “I approve a user’s level of access, and I can see in Cyscale if he is
                                    overprivileged and then work with my team to fix it.”
                                </strong>
                                , adds Alex.
                            </p>
                            <p className='font-hind text-base' css={textColor}>
                                Cyscale improves the visibility of cloud identities and pinpoints vulnerabilities or
                                misconfigurations through a powerful Identity Dashboard. The platform detects each
                                person in the organization and provides valuable information regarding MFA, privileges
                                and access, making it easy to detect when permissions drift from the expected setup.
                            </p>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-4 lg:mt-0'>
                            <div
                                css={css`
                                    background-color: #f5f9ff;
                                `}
                                className='p-4 rounded-md'
                            >
                                <GatsbyImage alt='' image={data.quotes.childImageSharp.gatsbyImageData} />
                                <p className='text-lg font-hind font-semibold mt-4' css={subtitleColor}>
                                    The platform helps me with IAM visibility a lot: I can understand who has access and
                                    why. When a person leaves the company, I can detect if their permissions remain
                                    hanging. I don’t have to rely on affirmations that access has been removed, I can
                                    easily see it and confirm it in Cyscale.
                                </p>
                                <p className='text-base font-hind mt-2' css={subtitleColor}>
                                    Alex Cociu
                                </p>
                            </div>
                        </div>
                    </div>
                    <Subtitle css={subtitleColor}>Results</Subtitle>
                    <p className='font-hind text-base mt-8' css={textColor}>
                        The company was able to manage identity and access management effectively, which was one of the
                        focus points when onboarding into Cyscale. As a result, Alex Cociu now confirms that they have
                        the much-needed visibility over users’ permissions.
                    </p>
                    <p className='font-hind text-base' css={textColor}>
                        In addition, after onboarding into Cyscale, the Smart Fintech development team set a goal to
                        achieve zero alerts, which meant ensuring that their cloud environment was always in compliance
                        with their policies. They now know if there are any drifts, and the platform alerts them of
                        deviations from their initial goal.
                    </p>{' '}
                    <p className='font-hind text-base' css={textColor}>
                        Moreover, they can adjust the configurations according to acceptable risk by creating exemptions
                        to exclude certain cloud assets.
                    </p>
                    <Subtitle css={subtitleColor}>Conclusion</Subtitle>
                    <p className='font-hind text-base mt-8' css={textColor}>
                        The platform’s automation capabilities helped the company reduce the time and resources required
                        to manage its cloud environment, which was particularly beneficial for a constrained team with
                        limited resources.
                    </p>
                    <p className='font-hind text-base mb-24' css={textColor}>
                        As Smart Fintech continues to grow, Cyscale is prepared to assist them. Besides IAM and
                        visibility, the platform also provides data security and alerts dashboards, over 400 controls
                        that verify the entire cloud environment, a compliance module, and many others. To read more
                        about Cyscale and learn about cloud security, check out the{' '}
                        <Link to='/blog' className='underline cursor-pointer'>
                            blog
                        </Link>
                        .
                    </p>{' '}
                </div>
                <div className='flex flex-col self-stretch justify-between mt-20' ref={parentRef}>
                    <div
                        className={classnames({
                            'hidden xl:block w-72 sticky pl-10': true,
                            'pb-12': true,
                            'top-0': trigger,
                            'top-28': !trigger
                        })}
                        css={ctaTransition}
                        ref={stickyRef}
                    >
                        <p
                            className={classnames({ 'font-montserrat text-xs font-bold': true, 'pt-4': !isTop })}
                            css={css`
                                color: #818791;
                            `}
                        >
                            DISCOVER THE NEXT CASE STUDY
                        </p>
                        <Link
                            className='font-montserrat font-bold font-lg mt-2 block hover:underline'
                            css={subtitleColor}
                            to='/case-studies/bays-consulting/'
                        >
                            “It’s been great at identifying blind spots”: Bays Consulting achieves 50% productivity gain
                            with Cyscale
                        </Link>
                        <hr className='mt-8' css={hrStyle} />
                        <p className='font-montserrat text-lg font-bold pt-4' css={subtitleColor}>
                            Ready to get started?
                        </p>
                        <div className='mt-4'>
                            <Link
                                className='bg-blue text-white rounded cursor-pointer font-medium font-hind'
                                to='/request-demo/'
                                css={[
                                    hoverButtonColorStyle,
                                    widthFitStyle,
                                    css`
                                        padding: 0.625rem 2.5rem;
                                    `
                                ]}
                            >
                                Contact Sales
                            </Link>
                        </div>
                        <hr className='mt-8' css={hrStyle} />
                        <p className='font-montserrat text-lg font-bold mt-8' css={subtitleColor}>
                            Save for later
                        </p>
                        <p className='font-montserrat font-medium text-xs'>Smart Fintech Case Study</p>
                        <Link
                            to='/resources/case-study-smart-fintech.pdf'
                            className='font-montserrat font-medium text-xs hover:underline cursor-pointer text-blue'
                        >
                            Download Case Study
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className='py-24 flex flex-col items-center'
                css={css`
                    background-image: linear-gradient(90deg, #0f26aa -1.79%, #ff4a56 165.6%);
                `}
            >
                <h2 className='text-white font-bold font-montserrat text-lg lg:text-2xl'>
                    Close IAM visibility gaps today
                </h2>
                <p className='text-white mt-8 text-base sm:text-lg lg:text-xl text-center px-2 sm:px-0'>
                    Sign up for a custom demo to see how the
                    <br /> Cyscale Platform helps you secure your cloud data.
                </p>
                <GatsbyLink
                    to={'/request-demo/'}
                    className='bg-white text-base font-medium rounded mt-8 hover:bg-transparent font-hind'
                    css={css`
                        padding: 0.625rem 2.5rem;
                        border: thin solid #ffffff;
                        color: #0f26aa;

                        &:hover {
                            color: #ffffff;
                        }
                    `}
                >
                    REQUEST A DEMO
                </GatsbyLink>
            </div>
            <LinksAndWhitepaper
                topArticles={topArticles}
                data={data}
                title={'News and Insights about CNAPP'}
                titleCard={'The Complete Guide<br class="hidden lg:block" /> to Cloud Storage Misconfigurations'}
                textCard={
                    'This guide helps CIOs, CISOs and security staff to understand the risk & dangers of data security breaches and the importance of a secure cloud storage infrastructure.'
                }
                linkCard={'/whitepaper/cloud-storage-misconfigurations/'}
                misconfigurationWhitepaper={true}
            />
        </Layout>
    );
};

export default SmartFintech;
