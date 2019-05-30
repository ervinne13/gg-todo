import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import 'App/Client/index.css';

function loadStories() {
    require('./stories/buttons.jsx');
    require('./stories/calendar.jsx');
    require('./stories/tasks.jsx');
    require('./stories/modal.jsx');
}

addDecorator(
    withInfo({
        inline: true, 
        header: false, 
        source: true,
    })
);

configure(loadStories, module);