import * as React from 'react';
import Layout from '../../components/layouts/weapon_classes/layout';
import picture from '../../images/dualies.jpeg';
import { dualiesBackground } from '../../css/main.module.css';
import { Helmet } from 'react-helmet';

const description = (
    <div>
        <p>The dualies are a two guns, used as a dual-wield. 
        The gun has decent mobility, and you can roll by pressing B and moving in any direction. A good idea is to use the roller defensively, 
        and roll away when you've taken heavy damage.</p>
    </div>
);

const stats = (
    <div>
        <ul>
            <li>Range: 50 / 100</li>
            <li>Damage: 29 / 100</li>
            <li>Mobility: 70 / 100</li>
        </ul>
    </div>
)

const DualiesPage = () => {
    return (
    <div>
        <Helmet>
            <title>Armory | Splat Dualies</title>
            <body className={dualiesBackground}></body>
        </Helmet>
        <Layout
        headingTitle="Splat Dualies"
        description={description}
        image={picture}
        stats={stats}
        />
    </div>
    );
}

export default DualiesPage;