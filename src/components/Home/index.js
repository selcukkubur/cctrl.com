import React from 'react';
import loadable from '@loadable/component'
import messageIcon from '../../assets/images/chat_icon.png';
import searchIcon from '../../assets/images/search.png';
import cloudIcon from '../../assets/images/cloud.png';
import iconTwo from '../../assets/images/elemente-vectoriale-07.png';
import iconThree from '../../assets/images/elemente-vectoriale-08.png';
import Services from './services';
import { SecurityKnowledgeGraph, CloudNative, RemoteWorkWft, DataGathering } from './images';

const GetStarted = loadable(() => import('./getstarted'))
const Offer = loadable(() => import('./offer'))
const Cloud = loadable(() => import('./cloud'))
const Partners = loadable(() => import('./partners'))
const PostsPreview = loadable(() => import('../new-blog/PostsPreview'))
const Sectionheader = loadable(() => import('../layout/sectionheader'))

const Home = () => {
    const dataService = [
        {
            title: 'Compliance Officers optimize their effort and results',
            description1:
                'Evaluate, improve, and automatically monitor compliance levels with a great range of regulatory standards, including GDPR, HIPAA, PCI-DSS, ISO 27001, and NIST.\n\n Check if policies are correctly implemented for all cloud service providers from a single dashboard and get alerts for issues as they appear. \n\n Deploy new and updated policies across multi-cloud environments and track every change with our 1-year data retention and data export options.',
            linkText: 'explore compliance features',
            linkURL: '/use-cases/cloud-compliance-and-auditing/',
            img: messageIcon
        },
        {
            title: 'IT & security specialists control and manage entire cloud inventories',
            description1:
                'Bridge multiple environments with Cyscale and visualise your cloud inventory in full.\n\n Discover unused, forgotten cloud resources and eliminate them to get smaller invoices from cloud providers and optimize costs for the whole organization. \n\n See accurate correlations across all cloud accounts and assets as soon as you sign up and act on alerts to avoid fines for data breaches.',
            linkText: 'Explore cloud security features',
            linkURL: '/products/cloud-security-posture-management/',
            img: searchIcon
        },
        {
            title: 'DevSecOps teams automate cloud security across interlinked assets',
            description1:
                'Fingerprint all cloud data repositories with Cyscale and quickly identify assets that violate security controls.\n\n Onboard your team in 30 minutes and coordinate efforts to check 500+ out-of-the-box security rules and policies. \n\n The Cyscale Security Knowledge Graph™ captures the interconnectedness between assets, identities, and data so you can easily track, evaluate and remediate cybersecurity issues.',
            linkText: 'explore data security features',
            linkURL: '/use-cases/cloud-data-security/',
            img: cloudIcon
        }
    ];
    const dataOffer = [
        {
            title: 'Security Knowledge Graph™ with continuous multi-cloud monitoring',
            description1:
                'Get rich, accurate correlations between all your cloud accounts, SaaS platforms, and assets. Cyscale provides automated reasoning that pinpoints data security issues in context.',
            btnText: 'See how it works',
            bntLink: '/products/security-knowledge-graph/',
            tabBodyTitle: 'Security Knowledge Graph™',
            tabBodyImage: <SecurityKnowledgeGraph />
        },
        {
            title: 'Real-time cloud inventory management with contextual analysis',
            description1:
                'Achieve deep, extensive visibility of your entire cloud environment. Map all cloud assets with zero scripts or manual work and automatically track changes that impact your attack surface.',
            btnText: 'Explore features',
            bntLink: '/use-cases/cloud-data-security/',
            tabBodyTitle: 'Real-time cloud inventory',
            tabBodyImage: <CloudNative />
        },
        {
            title: 'Comprehensive WFH compliance overview with granular control options',
            description1:
                'Reduce your workload with the 500+ ready-to-use security controls and policies on the platform and automatically demonstrate compliance.',
            btnText: 'Get the details',
            bntLink: '/use-cases/remote-work-security/',
            tabBodyTitle: 'Remote work compliance',
            tabBodyImage: <RemoteWorkWft />
        },
        {
            title: 'Automated evidence collection with data exports and 1-year retention',
            description1:
                'Offload collecting inline evidence for each policy to Cyscale and relieve compliance and security specialists of tedious manual data gathering. Export results that match your workflow.',
            btnText: 'Streamline compliance',
            bntLink: '/use-cases/cloud-compliance-and-auditing/',
            tabBodyTitle: 'Automated evidence collection',
            tabBodyImage: <DataGathering />
        }
    ];

    const dataCloud = [
        {
            title: 'Leverage built-in compliance standards and security frameworks',
            divider: '⁃',
            description:
                'Use ongoing compliance testing with CIS, ISO 27001:2013, SOC 2, NIST 800, NIST CSF, PCI-DSS, CCPA, GDPR, HITRUST, HIPAA and other standards to keep your certification up to date.'
        },
        {
            title: 'Meet and sustain CIS benchmarks for public cloud infrastructures',
            divider: '⁃',
            description:
                'Automatically assess cloud configurations against CIS benchmarks in all key areas, including identity and access management (IAM), system logging protocols, and network configurations.'
        },
        {
            title: 'Bring Your Own Policy and enforce it for all cloud providers',
            divider: '⁃',
            description:
                'Easily import or create your policies, procedures and controls to comply with local or regional security frameworks. Deploy them across clouds and manage them in a centralized dashboard.'
        },
        {
            title: 'Shift left with an API built for ongoing compliance',
            divider: '⁃',
            description: [
                'Optimize compliance efforts and costs with compliance as code. Integrate',
                ' ',
                <a
                    href='https://api-reference.cyscale.com/'
                    className='text-blue underline text-16px hover:no-underline hover:text-red'
                    key='1asd'
                >
                    the Cyscale API
                </a>,
                ' to automate compliance scans, data exports and to feed findings into your SIEM or other security tools.'
            ]
        }
    ];
    const dataCloudBenefits = [
        {
            title: 'Data Security ',
            description:
                'Manage users, roles, permissions, and controls with powerful contextual analysis and alerts that cover your entire cloud infrastructure.',
            lintText: 'Use Cyscale for cybersecurity',
            linkURL: '/use-cases/cloud-data-security/'
        },
        {
            title: 'Compliance',
            description:
                'Prove alignment with the highest standards, enforce policies consistently across cloud providers and scale compliance efforts without overhead.',
            lintText: 'Use Cyscale for compliance',
            linkURL: '/use-cases/cloud-compliance-and-auditing/'
        },
        {
            title: 'Remote Work',
            description: [
                'Fix misconfigurations as soon as they appear, curb overly permissive access rights and keep publicly available data in check from the same dashboard or through',
                ' ',
                <a
                    href='https://api-reference.cyscale.com/'
                    className='text-blue underline text-16px hover:no-underline hover:text-red'
                    key='1asdd'
                >
                    our API
                </a>,
                '.'
            ],
            lintText: 'Use Cyscale to reduce exposure',
            linkURL: '/use-cases/remote-work-security/'
        },
        {
            title: 'Managed security',
            description:
                'Scale your expertise to serve more customers by using Cyscale to deliver a superior map of their cloud attack surface while managing their cloud security with visible, transparent results.',
            lintText: 'Use Cyscale to grow your business',
            linkURL: '/products/cloud-security-posture-management/'
        }
    ];

    return (
        <>
            <Services
                headingText='How Cyscale makes your job easier & more effective'
                data={dataService}
                homePage={true}
            />
            <div className='gradientBG'>
                <GetStarted
                    description='Discover the most flexible pricing in the cloud security industry'
                    btnText='See pricing options'
                    btnLink='/pricing'
                />
            </div>
            <Offer
                headingText='Cyscale Cloud Platform - supercharged cloud security'
                description={`Only the best tools fade into the background and help you focus on getting your best work done. \n\nThat's why we've built all of this and more into the platform.`}
                data={dataOffer}
                id="offer"
            />
            <div className='gradientBG'>
                <GetStarted
                    description='Start seeing value & saving money in minutes'
                    btnText=' Try Cyscale for free'
                    btnLink="/free-trial/"
                />
            </div>
            <Cloud
                title='Visibility, governance & compliance for all your cloud assets'
                sectionName='compliance'
                data={dataCloud}
                id="compliance"
            />
            <div className='cloudBenifits bg-lightGrey pb-71px'>
                <Cloud
                    sectionName='cloudBenefits'
                    title='A Cloud Security Posture Management platform the entire organization benefits from'
                    data={dataCloudBenefits}
                    id="cloud-benefits"
                />
            </div>
            <div className='max-w-1366px m-auto pt-67px pb-67px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px' id="integrations">
                <Sectionheader
                    headingText='Cyscale Cloud Platform integrates with'
                    description={`We support all major cloud providers from Amazon Web Services to Microsoft Azure, Google Cloud, Oracle Cloud, and IBM Cloud. \n\nYou can also use Cyscale for your cloud-native security needs (VMs, network, serverless, databases, apps) for vulnerability and threat management, cloud inventory, secure cloud extension, and as a compliance and cost-reduction solution.`}
                    subText='Integrations & Data Gathering'
                />
            </div>
            <Partners />
            <div className='max-w-1366px m-auto pt-67px pb-67px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px' id="latest-blogs">
                <Sectionheader headingText={`What we're up to`} />
            </div>
            <PostsPreview  />
            <div className='gradientBG'>
                <GetStarted
                    description='When did you last scan your cloud for misconfigurations?'
                    btnText='Start scanning for free'
                    btnLink="/free-trial/"
                    icon={iconTwo}
                    icon2={iconThree}
                    sectionName='getStartedFooter'
                />
            </div>
        </>
    );
};

export default Home;
