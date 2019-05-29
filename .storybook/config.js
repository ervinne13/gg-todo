import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import 'App/Client/index.css';

function loadStories() {
    require('./stories/buttons.jsx');
    require('./stories/calendar.jsx');
    // You can require as many stories as you need.
}

addDecorator(
    withInfo({
        inline: true, 
        header: false, 
        source: true,
    })
);

configure(loadStories, module);