import React from 'react';
import {storiesOf} from '@storybook/react';
import LoadingIndicator from '../loading-indicator.js';

storiesOf('Loading Indicator', module)
    .add('default view', () => <LoadingIndicator />);
