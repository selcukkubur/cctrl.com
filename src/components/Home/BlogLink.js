import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { css } from 'twin.macro';

const imageArticleWidth = css`
    width: 6.813rem;
`;

const BlogLink = ({ link, categories, text, image, classNames }) => {
    return (
        <div className={'col-span-12 md:col-span-6 lg:col-span-4 mx-auto lg:mx-0 ' + classNames || ''}>
            <div className='flex gap-3 sm:gap-5 w-80 sm:w-96 lg:w-auto'>
                <Link to={link}>
                    <div>
                        <GatsbyImage
                            image={image}
                            alt=''
                            css={imageArticleWidth}
                            imgStyle={{ borderRadius: '0.75rem' }}
                        />
                    </div>
                </Link>
                <div>
                    <div className='flex gap-1 md:gap-5'>
                        {categories.map((category, index) => (
                            <Link
                                to={`/blog/${category}`}
                                className='text-white font-hind text-xs uppercase hover:underline'
                                key={index}
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                    <Link to={link}>
                        <p className='text-white font-montserrat font-bold text-base lg:text-lg hover:underline'>
                            {text}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogLink;
