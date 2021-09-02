import * as React from 'react';
import Layout from '../../components/layouts/weapon_classes/layout';
import picture from '../../images/splatling.jpeg';
import { splatlingBackground } from '../../css/backgrounds.module.css';
import { Helmet } from 'react-helmet';

const description = (
    <div>
        <p>
            The splatling is a weapon that plays a similar role to the charger. You charge up the weapon and the more you charge it, 
            the better its effectiveness. It has two levels of charge, and the more you can charge it the better. Since you are
            left vunerable when charging its best to play it from long range.
        </p>
    </div>
);

const stats = (
    <div>
        <ul>
            <li>Range: 78/100</li>
            <li>Charge Speed: 38/100</li>
            <li>Mobility: 50/100</li>


        </ul>
    </div>
);

const SplatlingPage = () => {
    return (
        <div>
            <Helmet>
                <title>Armory | Splatling</title>
                <body className={splatlingBackground}/>
            </Helmet>
            <Layout
            headingTitle="Heavy Splatling"
            description={description}
            stats={stats}
            image={picture}
            imageAlt="Heavy Splatling"/>
        </div>
    );
}

export default SplatlingPage;