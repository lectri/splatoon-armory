import * as React from 'react';
import Layout from '../../components/layouts/weapon_classes/layout';
import picture from '../../images/brella.jpg';
import { brellaBackground } from '../../css/backgrounds.module.css';
import { Helmet } from 'react-helmet';

const description = (
    <div>
        <p>The brella is a shield that can defend ink coming in front of you. 
            But you aren't fully safe! Your sides and back are still vulnerable. 
            The shield can be broken if enough ink is thrown at it, and the brella shoots blobs of ink at a set interval.</p>
    </div>
);

const stats = (
    <ul>
        <li>Range: 43/100</li>
        <li>Damage: 65/100</li>
        <li>Durability: 60/100</li>
    </ul>
);

const BrellaPage = () => {
    return (
        <div>
            <Helmet>
                <title>Armory | Splat Brella</title>
                <body className={brellaBackground}/>
            </Helmet>
            <Layout
            headingTitle="Splat Brella"
            description={description}
            image={picture}
            imageAlt="Splat Brella"
            stats={stats}>
            </Layout>
        </div>
    );
};

export default BrellaPage;