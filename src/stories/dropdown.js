// @flow
import React, {Component} from 'react';
import {storiesOf} from '@kadira/storybook';
import Dropdown from '../dropdown.js';

class ContentPanel extends Component {
    render() {
        return <div>
            <p>
            Lucas ipsum dolor sit amet chewbacca darth c-3p0 ackbar skywalker
            moff skywalker owen fett organa. Kenobi mon lando ewok. Jade watto
            dagobah gamorrean mon kashyyyk. Mara k-3po moff hoth. Boba zabrak
            padmé calamari qui-gon ben. Fisto yavin mara coruscant windu lars
            mace boba wicket. Vader yavin solo darth jade hutt jango. Watto
            darth organa hutt maul skywalker antilles. Fett moff antilles
            organa. Naboo ponda grievous fett. Mothma amidala antilles wookiee
            c-3po darth antilles windu. Kessel calamari hutt luuke tusken
            raider skywalker qui-gon.
            </p>

            <p>
            Lucas ipsum dolor sit amet chewbacca darth c-3p0 ackbar skywalker
            moff skywalker owen fett organa. Kenobi mon lando ewok. Jade watto
            dagobah gamorrean mon kashyyyk. Mara k-3po moff hoth. Boba zabrak
            padmé calamari qui-gon ben. Fisto yavin mara coruscant windu lars
            mace boba wicket. Vader yavin solo darth jade hutt jango. Watto
            darth organa hutt maul skywalker antilles. Fett moff antilles
            organa. Naboo ponda grievous fett. Mothma amidala antilles wookiee
            c-3po darth antilles windu. Kessel calamari hutt luuke tusken
            raider skywalker qui-gon.
            </p>

            <p>
            Lucas ipsum dolor sit amet chewbacca darth c-3p0 ackbar skywalker
            moff skywalker owen fett organa. Kenobi mon lando ewok. Jade watto
            dagobah gamorrean mon kashyyyk. Mara k-3po moff hoth. Boba zabrak
            padmé calamari qui-gon ben. Fisto yavin mara coruscant windu lars
            mace boba wicket. Vader yavin solo darth jade hutt jango. Watto
            darth organa hutt maul skywalker antilles. Fett moff antilles
            organa. Naboo ponda grievous fett. Mothma amidala antilles wookiee
            c-3po darth antilles windu. Kessel calamari hutt luuke tusken
            raider skywalker qui-gon.
            </p>

            <p>
            Lucas ipsum dolor sit amet chewbacca darth c-3p0 ackbar skywalker
            moff skywalker owen fett organa. Kenobi mon lando ewok. Jade watto
            dagobah gamorrean mon kashyyyk. Mara k-3po moff hoth. Boba zabrak
            padmé calamari qui-gon ben. Fisto yavin mara coruscant windu lars
            mace boba wicket. Vader yavin solo darth jade hutt jango. Watto
            darth organa hutt maul skywalker antilles. Fett moff antilles
            organa. Naboo ponda grievous fett. Mothma amidala antilles wookiee
            c-3po darth antilles windu. Kessel calamari hutt luuke tusken
            raider skywalker qui-gon.
            </p>

            <p>
            Lucas ipsum dolor sit amet chewbacca darth c-3p0 ackbar skywalker
            moff skywalker owen fett organa. Kenobi mon lando ewok. Jade watto
            dagobah gamorrean mon kashyyyk. Mara k-3po moff hoth. Boba zabrak
            padmé calamari qui-gon ben. Fisto yavin mara coruscant windu lars
            mace boba wicket. Vader yavin solo darth jade hutt jango. Watto
            darth organa hutt maul skywalker antilles. Fett moff antilles
            organa. Naboo ponda grievous fett. Mothma amidala antilles wookiee
            c-3po darth antilles windu. Kessel calamari hutt luuke tusken
            raider skywalker qui-gon.
            </p>
        </div>;
    }
}

const DropdownExample = () => <Dropdown
    contentComponent={ContentPanel}
    contentProps={{}}
>
    <span>This is the header</span>
</Dropdown>;


storiesOf('Dropdown', module)
    .add('default view', () => <DropdownExample />);
