import React from 'react';

import Layout from '../components/layout/layout.js';
import Pricing from '../components/pricing';

const PricingPage = ({ location }) => (
    <Layout
        location={location}
        pageName='Pricing'
        title='Pricing - Cyscale Cloud Platform'
        description="Pay fair for security experts' advice and guidance. Quantifiable ROI for cloud data security and compliance. Reduce cloud costs and consumption."
    >
        <Pricing />
    </Layout>
);

export default PricingPage;
