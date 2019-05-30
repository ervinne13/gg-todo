import React from 'react';
import { storiesOf } from '@storybook/react';
import CalendarLinkItem from 'App/Client/Features/Calendar/Components/CalendarLinkItem';
import VerticalDateNavigator from 'App/Client/Features/Calendar/Components/VerticalDateNavigator';

storiesOf('Calendar Link Item', module)
    .addDecorator(storyFn => <div style={{ width: '400px', borderTop: '1px #7E7E7E solid', borderBottom: '1px #7E7E7E solid'  }} children={storyFn()} />)
    .add('using date object & all tasks done', () => (
        <CalendarLinkItem
            taskMessage="All Tasks Done"
            date={new Date('2019-05-01')}
        />
    ))
    .add('without tasks', () => (
        <CalendarLinkItem
            taskMessage="No Tasks"
            date={new Date('2019-05-01')}
        />
    ))
    .add('using date string', () => (
        <CalendarLinkItem
            taskHighlight="primary"
            taskMessage="5 Tasks Open"
            date="2019-05-01"
        />
    ))
    .add('with open items', () => (
        <CalendarLinkItem
            taskHighlight="primary"
            taskMessage="5 Tasks Open"
            date={new Date('2019-05-01')}
        />
    ))
    .add('using highlighted with open tasks', () => (
        <CalendarLinkItem
            taskHighlight="primary"
            taskMessage="5 Tasks Open"
            date={new Date('2019-05-01')}
            isActive={true}
        />
    ))
    .add('using highlighted with all tasks done', () => (
        <CalendarLinkItem
            taskHighlight="info"
            taskMessage="All Tasks Done"
            date={new Date('2019-05-01')}
            isActive={true}
        />
    ))
    ;

storiesOf('Vertical Date Navigator', module)
    .addDecorator(storyFn => <div style={{ width: '400px' }} children={storyFn()} />)
    .add('no selected date', () => (
        <VerticalDateNavigator />
    ))
    .add('with selected date', () => (
        <VerticalDateNavigator selectedDate="2019-05-01" />
    ))
    .add('on date selected', () => (
        <VerticalDateNavigator selectedDate="2019-05-01" onDateClicked={date => alert(date)} />
    ), {
            info: {
                text: "The `selectedDate` can only be set from the properties. This is so that we'll have the opportunity later on to wait for events when `onDateClicked` is triggered, and then, set the `selectedDate` afterwards to refresh the state"
            }
        })
    .add('on dates displayed changed', () => (
        <VerticalDateNavigator selectedDate="2019-05-01" onDatesDisplayedChanged={console.log} />
    ), {
            info: {
                text: "Check the console for the current dates displayed. This will be useful for querying the tasks for every date that's currently being displayed."
            }
        })
    .add('demo VerticalDateNavigator user', () => (
        <DemoVerticalDateNavigatorUser />
    ), {
            info: {
                text: "See the source code `./storybook/stories/calendar.jsx`'s DemoVerticalDateNavigatorUser"
            }
        })
    .add('with task data', () => (
        <VerticalDateNavigator selectedDate="2019-05-01" tasksSummary={mockTaskSummaryPerDateData} />
    ))
    ;

class DemoVerticalDateNavigatorUser extends React.Component {
    state = {
        selectedDate: new Date()
    }

    onDateClicked(selectedDate) {
        this.setState({ selectedDate });
    }

    render() {
        return <VerticalDateNavigator
            selectedDate={this.state.selectedDate}
            onDateClicked={selectedDate => this.onDateClicked(selectedDate)} />
    }
}

const mockTaskSummaryPerDateData = [
    { date: '2019-05-01', taskCount: 5, doneTaskCount: 0 },
    { date: '2019-05-02', taskCount: 0, doneTaskCount: 0 },
    { date: '2019-05-03', taskCount: 6, doneTaskCount: 3 },
    { date: '2019-05-04', taskCount: 4, doneTaskCount: 4 },
    { date: '2019-05-05', taskCount: 0, doneTaskCount: 0 },
    { date: '2019-05-06', taskCount: 0, doneTaskCount: 0 },
    { date: '2019-05-07', taskCount: 0, doneTaskCount: 0 },
];