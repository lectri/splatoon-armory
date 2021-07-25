import * as React from 'react';
import WeaponHeader from "../../components/headers/weapon-class-header";
import Layout from '../../components/layouts/weapon_classes/layout';
import picture from '../../images/splattershot.jpeg';

const Shooter = () => {
    return (
        <div>
            <WeaponHeader />
            <Layout
                headingTitle='Shooter'
                description='The shooter is the default weapon in the game, it is most similar to an SMG. It has medium range, and medium damage. 
            It can be good for attacking people, or for defending. Truly the jack of all trades. 
            Just don&apos;t let weapons with high range/damage take advantage!'
                image={picture}
                imageAlt='Splattershot'
            >
                <ul>
                    <li>Damage: 45 / 100</li>
                    <li>Range: 50 / 100</li>
                    <li>Fire Rate: 60 / 100</li>
                </ul>
            </Layout>
        </div>
    )
}

export default Shooter;