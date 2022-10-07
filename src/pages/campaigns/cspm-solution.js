import React from 'react';
import { Container, Row } from '../../components/atoms/Containers';
import { graphql, useStaticQuery } from 'gatsby';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import ScrollButtonStartups from '../../components/ScrollButton/ScrollButtonStartups';
import { GatsbyImage } from 'gatsby-plugin-image';
import gcpLogo from '../../assets/images/google-cloud-campaigns-iam-security.svg';
import awsLogo from '../../assets/images/aws-campaigns-iam-security.svg';
import azureLogo from '../../assets/images/azure-campaigns-iam-security.svg';
import alibabaLogo from '../../assets/images/alibaba-campaigns-iam-security.svg';
import oktaLogo from '../../assets/images/okta-campaigns-iam-security.svg';
import { animateScroll } from 'react-scroll';
import NewCookiesCampaignsLayout from '../../components/campaigns/NewCookiesCampaignsLayout';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import classnames from 'classnames';
import Loader from '../../components/Loader/Loader';

const CSPMSolution = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query CSPMSolutionCampaignQuery {
            dashboard: file(relativePath: { eq: "dashboard-cspm-solution.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            alerts: file(relativePath: { eq: "alerts-cspm-solution.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            policies: file(relativePath: { eq: "policies-cspm-solution.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <NewCookiesCampaignsLayout
            formId={'81943e73-3b0a-4e69-8c8d-92c747a10796'}
            formTargetId={'#request-cspm-demo'}
            location={location}
            title={'Comprehensive CSPM solution'}
            description={
                'Streamline posture management for multi-cloud environments, enable teams to continuously detect, prevent misconfigurations and control threats and ensure compliance for your cloud assets.'
            }
            pageName={'CSPMSolutionCampaign'}
        >
            <div className='bg-hero-campaigns-iam-security pb-8 pt-32 lg:pt-20 xl:pt-12'>
                <Container>
                    <div>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 '>
                                <div className='lg:mt-4 pt-2 md:pt-8 lg:pt-4 max-w-xl mx-auto lg:mx-0'>
                                    <h1 className='text-center sm:text-left text-blue text-3xl md:text-4xl lg:text-5xl lg:leading-normal mb-8 montserrat-font'>
                                        Comprehensive <br className='hidden lg:block' /> <strong>CSPM solution</strong>
                                    </h1>
                                    <p className='text-center sm:text-left text-base lg:text-lg leading-relaxed text-gray'>
                                        Streamline posture management for multi-cloud environments, enable teams to
                                        continuously detect, prevent misconfigurations and control threats and ensure
                                        compliance for your cloud assets.
                                    </p>
                                    <ul className='list-disc pl-8 mb-8'>
                                        <li className='text-base lg:text-lg text-gray'>
                                            A comprehensive Asset Inventory and Asset Management
                                        </li>
                                        <li className='text-base lg:text-lg text-gray'>
                                            Continuous Security and Compliance for AWS, Azure, GCP & more
                                        </li>
                                        <li className='text-base lg:text-lg text-gray'>
                                            Automatic remediations by learning your cloud infrastructure
                                        </li>
                                        <li className='text-base lg:text-lg text-gray'>
                                            Detect change and eliminate misconfigurations{' '}
                                        </li>
                                    </ul>
                                    <div className='flex flex-row max-w-md sm:max-w-xl justify-between flex-wrap space-y-6 lg:space-y-0 lg:space-x-1 px-18 sm:px-0 mx-auto'>
                                        <img
                                            style={{ marginTop: '0' }}
                                            className='mx-auto sm:mx-0'
                                            src={gcpLogo}
                                            alt=''
                                        />
                                        <img
                                            style={{ marginTop: '0' }}
                                            className='mx-auto sm:mx-0'
                                            src={awsLogo}
                                            alt=''
                                        />
                                        <img
                                            style={{ marginTop: '0' }}
                                            className='mx-auto sm:mx-0'
                                            src={azureLogo}
                                            alt=''
                                        />
                                        <img
                                            style={{ marginTop: '0' }}
                                            className='mx-auto sm:mx-0 hidden sm:block'
                                            src={alibabaLogo}
                                            alt=''
                                        />
                                        <img
                                            style={{ marginTop: '0' }}
                                            className='mx-auto sm:mx-0 hidden sm:block'
                                            src={oktaLogo}
                                            alt=''
                                        />
                                    </div>
                                    <div className='flex flex-row max-w-xs justify-evenly flex-wrap space-y-6 px-18 sm:px-0 mx-auto  block sm:hidden'>
                                        <img style={{ marginTop: '0' }} className='' src={alibabaLogo} alt='' />
                                        <img style={{ marginTop: '0' }} className='' src={oktaLogo} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6' id='apply-now'>
                                <div
                                    className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 lg:pt-12 pb-0 px-8 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                        backdropFilter: 'blur(5px)'
                                    }}
                                >
                                    <h2 className='font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0 montserrat-font'>
                                        Request a live demo
                                    </h2>
                                    {loadingForm && (
                                        <div className='flex justify-center items-center' style={{ minHeight: 450 }}>
                                            <Loader />
                                        </div>
                                    )}
                                    <div
                                        style={{ minHeight: 450 }}
                                        id='request-cspm-demo'
                                        className={classnames('pb-4', { hidden: loadingForm })}
                                    />
                                </div>
                            </div>
                        </Row>
                    </div>
                    <div className='py-16 hidden sm:block '>
                        <ScrollButtonStartups to='start' />
                    </div>
                </Container>
            </div>
            <Container className='mt-0 md:mt-12 lg:mt-0'>
                <div className='pb-8 lg:pt-32 lg:pb-16' id='start'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.dashboard.childImageSharp.gatsbyImageData}
                                    alt='Dashboard view'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:pl-16'>
                                <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                    Prevent misconfigurations & mistakes
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2'>
                                    Cyscale automatically detects and reports violations of security controls and
                                    compliance risks.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    It's much easier to keep your cloud assets in check with ongoing change monitoring
                                    that bridges cloud providers.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    Single out misconfigured services and see how failed security controls impact
                                    compliance from a single, unified view. Plus, you get reliable remediation
                                    guidelines in the same place.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                        <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                            <GatsbyImage image={data.dashboard.childImageSharp.gatsbyImageData} alt='Dashboard view' />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='pb-8 lg:py-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm'>
                                <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                    Cut through
                                    <br /> the noise
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2'>
                                    Get relevant alerts when your cloud assets drift away from established security and
                                    compliance standards.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    Make Cyscale your single source of truth for Cloud Security Posture Management
                                    (CSPM) and never miss an important security event.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    Move beyond bulky, list-based management. Cyscale's Security Knowledge Graph™ makes
                                    precise correlations between all your cloud assets and data repositories to
                                    automatically pinpoint critical security improvements.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage image={data.alerts.childImageSharp.gatsbyImageData} alt='Alerts view' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='pt-8 lg:pt-16'>
                    <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 hidden lg:block'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.policies.childImageSharp.gatsbyImageData}
                                    alt='Policies view'
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-12 md:mt-0'>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-sm lg:pl-16'>
                                <h2 className='text-3xl font-bold text-primary leading-normal border-title-partly montserrat-font'>
                                    Automate compliance checks
                                </h2>
                            </div>
                            <div className='mx-auto lg:mx-0 max-w-xl lg:pl-16'>
                                <p className='leading-normal text-base text-gray pt-12 pb-2'>
                                    Use Cyscale for governance automation across cloud providers and internal teams to
                                    ensure consistent security and compliance.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    We keep your clouds under continuous assessment and provide in-app security
                                    consultancy so you make the most of your time and effort.
                                </p>
                                <p className='leading-normal text-base text-gray py-2'>
                                    Coming soon: create custom Controls that tap into our Security Knowledge Graph™ and
                                    automate the security and compliance checks that matter the most for your
                                    organization.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                                <GatsbyImage
                                    image={data.policies.childImageSharp.gatsbyImageData}
                                    alt='Policies view'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='py-24 lg:py-32'>
                    <div className='flex h-48 flex-col items-center'>
                        <img src={cloudIcon} alt='' />
                        <h1 className='text-center px-2 mb-2'>
                            <strong> AGENTLESS, MULTI-CLOUD, PAINLESS CSPM</strong>
                        </h1>
                        <h1 className='text-center px-1'>Start seeing value & saving money in minutes.</h1>
                        <div className='mt-6 w-auto inline-block'>
                            <button
                                className='gradientBgBtn w-full block text-base font-medium rounded text-white text-center py-3 px-12 hover:no-underline no-underline'
                                onClick={() => animateScroll.scrollToTop()}
                            >
                                Request Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </NewCookiesCampaignsLayout>
    );
};

export default CSPMSolution;
