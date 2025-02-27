import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import IconCyscaleUser from '../../icons/icon-cyscale-user.svg';
import {
    caretMenuWhiteStyle,
    fontNavLinkStyle,
    hoverButtonColorStyle,
    montserratFontStyle,
    paddingLeftStyle,
    sectionTitleColorStyle,
    widthFitStyle
} from '../../style';
import { company } from '../../nav';
import { css } from 'twin.macro';
import { isAnimatedNavbarPage, isPlaygroundBlogPage } from '../../../../common/utils';
import RightArrow from '../../../sharedComponent/RightArrow';

const caretCompany = (isAnimatedNavbarPage) => css`
    :before {
        ${caretMenuWhiteStyle};
        left: ${isAnimatedNavbarPage ? '40.7rem' : '45.4rem'};
    }
`;

const Company = ({ pathname, activeLinks, setActiveLinks }) => {
    const data = useStaticQuery(graphql`
        query CareersQueryForNewMenu {
            allMarkdownRemark(
                limit: 5
                sort: { frontmatter: { date: DESC } }
                filter: { frontmatter: { templateKey: { eq: "career-page" }, disabled: { eq: false } } }
            ) {
                nodes {
                    frontmatter {
                        date
                        description
                        permalink
                        title
                        experience
                    }
                }
            }
        }
    `);

    let jobs = data.allMarkdownRemark.nodes;

    return (
        <div
            className='max-w-5xl grid grid-cols-12 gap-2 ml-auto justify-end shadow-2xl bg-white'
            css={caretCompany(isAnimatedNavbarPage(pathname) && !isPlaygroundBlogPage(pathname))}
            onMouseEnter={() => setActiveLinks({ ...activeLinks, company: true })}
            onMouseLeave={() => setActiveLinks({ ...activeLinks, company: false })}
            tabIndex='-1'
            onClick={() => {}}
            onKeyPress={() => {}}
            role='presentation'
        >
            <div className='col-span-5 bg-selago p-6'>
                <h1 css={montserratFontStyle} className='text-2xl font-semibold mb-6'>
                    Our Mission
                </h1>
                <p className='mb-4'>
                    To help companies of all sizes to start, improve and maintain their{' '}
                    <strong>Cloud Security Program</strong> based on the industry best practices.
                </p>
                <Link
                    className='bg-blue text-white py-2 px-4 rounded cursor-pointer mb-22 font-medium'
                    to='/careers/'
                    css={[hoverButtonColorStyle, widthFitStyle]}
                >
                    <RightArrow fillColor={'white'} marginTop='-0.1rem' />
                    <span className='text-md ml-2'>Join the Cyscale Team</span>
                </Link>
                <div style={{ marginTop: '4rem' }}>
                    <img src={IconCyscaleUser} alt='' />
                </div>
            </div>
            <div className='col-span-2 py-6 px-2'>
                <p className='text-base font-light mb-6' css={[sectionTitleColorStyle, paddingLeftStyle]}>
                    OVERVIEW
                </p>
                {company.map((item, key) => {
                    return (
                        <div className='mb-2' key={key}>
                            <Link
                                className='p-2 hover:font-medium block'
                                to={item.link}
                                css={fontNavLinkStyle}
                                activeClassName='active'
                            >
                                {item.text}
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className='col-span-5 p-6'>
                <p className='pl-2 text-base font-light mb-6' css={sectionTitleColorStyle}>
                    OPEN POSITIONS
                </p>
                {jobs.map(({ frontmatter }, key) => {
                    const { permalink, title, experience } = frontmatter;
                    return (
                        <div className='mb-2' key={key}>
                            <Link
                                className='p-2 hover:font-medium block'
                                to={`/careers/${permalink}/`}
                                css={fontNavLinkStyle}
                                activeClassName='active'
                            >
                                {title} ({experience.toLowerCase()})
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Company;
