import React from 'react';
import navigation from '../NewNavigation/NavItems/navigation.json';
import { Link } from 'gatsby';

const CompanyMobile = () => {
    return (
        <div className='bg-white'>
            {navigation.company.map((item, key) => {
                return (
                    <div className='py-2 px-8' key={key} >
                        <Link to={item.link} className='text-base pt-4 block' key={key}>
                            {item.text}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default CompanyMobile;
