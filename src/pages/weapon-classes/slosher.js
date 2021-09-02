import * as React from 'react';
import Layout from '../../components/layouts/weapon_classes/layout';
import picture from '../../images/slosher.jpeg';
import { slosherBackground } from '../../css/backgrounds.module.css';
import { Helmet } from 'react-helmet';

const description = (
    <div>
        <p>The slosher is a close ranged weapon suited for racking up turf and dealing heavy damage. A good tactic for this gun is to sneak up on enemies
            and kill them. The slosher is also good when you have the high ground on an opponent, because the ink has more spread. This is why you should 
            jump a lot while you use the slosher for the spread.
        </p>
    </div>
);

const stats = (
    <div>
        <ul>
            <li>Range: 58/100</li>
            <li>Damage: 85/100</li>
            <li>Handling: 60/100</li>
        </ul>
    </div>
);

const SlosherPage = () => {
    return (
        <div>
            <Helmet>
                <title>Armory | Slosher</title>
                <body className={slosherBackground}/>
            </Helmet>
            <Layout
            headingTitle="Slosher"
            description={description}
            stats={stats}
            image={picture}
            imageAlt="Slosher"
            >

            </Layout>
        </div>
    );
}

export default SlosherPage;