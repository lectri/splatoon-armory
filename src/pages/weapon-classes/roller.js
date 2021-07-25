import * as React from 'react';
import WeaponHeader from '../../components/headers/weapon-class-header';
import Layout from '../../components/layouts/weapon_classes/layout';
import picture from '../../images/splat_roller.jpeg'

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
)

const RollerPage = () => {
    return (
        <div>
            <WeaponHeader/>
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