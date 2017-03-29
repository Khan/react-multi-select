import React from 'react';
import {storiesOf} from '@kadira/storybook';
import LoadingIndicator from '../loading-indicator.js';

storiesOf('Loading Indicator', module)
    .add('default view', () => <LoadingIndicator />);
