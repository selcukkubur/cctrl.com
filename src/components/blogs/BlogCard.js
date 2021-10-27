import React, {useRef, useCallback} from 'react';
import { Link } from 'gatsby';
import Share from '../Share/Share';

const maxTitle = 48;
const maxDescription = 128;

const BlogCard = ({ data, feature }) => {
    const link = useRef();
    let title = data.title?.slice(0, maxTitle);
    let description = data.description?.slice(0, maxDescription);
    if (feature) {
        title = data.title;
        description = data.description;
    } else {
        if (data.title?.length > maxTitle) {
            title += '...';
        }
        if (!feature && data.description?.length > maxDescription) {
            description += '...';
        }
    }

    const handleClick = useCallback(() => {
        if (link && link.current) {
            link.current.click();
        }
    }, [link]);

    return (
        <div>
            <div className='shadow-md cursor-pointer' role="link" onClick={handleClick}>
                <div className='bg-grey3 bigger-box-image '>
                    <img src={data.featuredimage.publicURL} alt={data.title} />
                </div>
                <div className='bg-white p-4'>
                    <strong className='text-xs block'>{data.category}</strong>
                    <div>
                        <Link ref={link} to={'/blog/' + data.permalink}>
                            <h3 title={data.title} className='text-blue text-24px leading-24px mt-11px'>
                                {title}
                            </h3>
                        </Link>
                        <span className='text-xs mt-2 block bold text-grey2'>
                            <strong>{data.authors} </strong> · <strong>{data.date?.split('T')?.[0]}</strong>
                        </span>
                        <p title={data.description} className='text-base leading-24px mt-2'>
                            {description}
                        </p>
                    </div>
                    <div className='flex justify-between align-content-center mt-13px mb-7px'>
                        <div className='w-80px flex justify-between'>
                            <Share title={data?.title} permalink={data?.permalink} description={data?.description} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
