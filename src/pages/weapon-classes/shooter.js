import * as React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/layouts/weapon_classes/layout';
import picture from '../../images/splattershot.jpeg';

const description = (
    <div>
        <p>The splattershot is the default weapon in the game, it is most similar to an SMG. It has medium range, and medium damage. 
            It can be good for attacking people, or for defending. Truly the jack of all trades. 
            Just don&apos;t let weapons with high range/damage take advantage!</p>
    </div>
)

const stats = (
    <ul>
        <li>Damage: 45 / 100</li>
        <li>Range: 50 / 100</li>
        <li>Fire Rate: 60 / 100</li>
    </ul>
);

const ShooterPage = () => {
    return (
        <div>
            <Helmet>
                <title>Armory | Splattershot</title>
            </Helmet>
            <Layout
                headingTitle='Splattershot'
                description={description}
                image={picture}
                imageAlt='Splattershot'
                stats={stats}
            />
        </div>
    );
}

export default ShooterPage;