import * as React from 'react';
import Layout from '../../components/layouts/weapon_classes/layout';
import picture from '../../images/splat_roller.jpeg';
import { rollerBackground } from '../../css/backgrounds.module.css';
import { Helmet } from 'react-helmet';

// Variable used to put JSX tags in a prop
const description = (
    <div>
        <p>
            The roller specializes in close range combat. It has three different methods of attacking.
            <ul>
                <li>Rolling, it's great for racking up turf, but good opponents can easily dodge the roll and kill you. Not good for combat.</li>
                <li>Horizontal Flicking, it's good for attacking people up close and is easy to one-shot people with. Lacks range though.</li>
                <li>Vertical Flicking. You can hit people from farther now, but it's difficult to aim far range.</li>
            </ul>
        </p>
    </div>
);

const stats = (
    <div>
        <ul>
            <li>Range: 48/100</li>
            <li>Ink Speed: 45/100</li>
            <li>Handling: 55/100</li>
        </ul>
    </div>
);

const RollerPage = () => {
    return (
        <div>
            <Helmet>
                <title>Armory | Splat Roller</title>
                <body className={rollerBackground}/>
            </Helmet>
            <Layout
            headingTitle='Splat Roller'
            description={description}
            image={picture}
            imageAlt='Splat Roller'
            stats={stats}
            />
        </div>
    );
}

export default RollerPage;