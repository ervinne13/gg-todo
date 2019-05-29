
import looseDate from './looseDate';

const optionalLooseDate = (props, propName, componentName) => {
    if (props[propName]) {
        return looseDate(props, propName, componentName);
    }

    //  no problem
    return null;
};

export default optionalLooseDate;