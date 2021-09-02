import * as React from 'react';
import Layout from '../../components/layouts/weapon_classes/layout';
import picture from '../../images/charger.jpeg';
import { chargerBackground } from '../../css/backgrounds.module.css';
import { Helmet } from 'react-helmet';

const description = (
    <div>
        <p>
            The charger specializes in long range combat. Don't let your opponents sneak up on you!
            It's difficult to get kills from close up. The sniper has a laser that you and 
            everyone else (including enemies can see. Try to hide your laser before sniping people.
            Also, there are two variants of a sniper, scoped and unscoped. Unscoped has less range with more visibility, and scoped has the opposite.
            Also, if you charge your scope and then go into squid form, you can hold you charge for a second to use it later.
        </p>
    </div>
);


const stats = (
    <div>
        <p>
        <p>The flagship sniper is the Splat Charger. Here are its stats.</p>
            <ul>
                <li>Damage: 88/100</li>
                <li>Charge Speed: 50/100</li>
                <li>Mobility: 40/100</li>
            </ul>
        </p>
    </div>
);

const ChargerPage = () => {
    return (
        <div>
            <Helmet>
                <title>Armory | Charger</title>
                <body className={chargerBackground}/>
            </Helmet>
            <Layout
            headingTitle="Charger"
            description={description}
            stats={stats}
            image={picture}
            imageAlt="Firefin Charger"
            >
            </Layout>
        </div>
    );
}

export default ChargerPage;