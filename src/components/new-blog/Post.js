import React from 'react';
import { Link } from 'gatsby';
import PostMeta from './PostMeta';
import Author from './Author';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

export default function Post({ authors, categories, date, permalink, title, description, featuredimage }) {
    const linkRef = React.useRef();

    return (
        <div
            role='link'
            tabIndex={0}
            className='rounded-xl shadow-lg bg-white block overflow-hidden group h-full cursor-pointer'
        >
            {featuredimage && (
                <div className='relative overflow-hidden' style={{ paddingBottom: '56.2%' }}>
                    <div className='absolute top-0 left-0'>
                        {permalink === 'whitepaper-cloud-compliance-in-2023' && (
                            <Link to='/whitepaper/the-complete-guide-to-cloud-compliance/'>
                                {' '}
                                <Img image={featuredimage?.childImageSharp?.gatsbyImageData} alt={title} />
                            </Link>
                        )}
                        {permalink !== 'whitepaper-cloud-compliance-in-2023' && (
                            <Link to={`/blog/${permalink}/`}>
                                {' '}
                                <Img image={featuredimage?.childImageSharp?.gatsbyImageData} alt={title} />
                            </Link>
                        )}
                    </div>
                </div>
            )}
            <div
                className='p-5'
                onClick={() => linkRef.current.click()}
                onKeyDown={(e) => (e.code === 13 || e.code === 32) && linkRef.current.click()}
                role='link'
                tabIndex={0}
            >
                <PostMeta date={date} categories={categories} />
                <Link ref={linkRef} to={`/blog/${permalink}/`}>
                    <h2 className='text-lg my-4 leading-tight font-medium group-hover:text-primary transition-all h-16'>
                        {title}
                    </h2>
                </Link>
                <div className='mt-auto'>
                    <Author author={authors} title={title} description={description} permalink={permalink} />
                </div>
            </div>
        </div>
    );
}
