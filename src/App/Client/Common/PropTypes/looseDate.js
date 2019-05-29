
const looseDate = (props, propName, componentName) => {
    componentName = componentName || 'ANONYMOUS';

    const value = props[propName];
    const dateProp = new Date(value);
    const isValidDate = Object.prototype.toString.call(dateProp) === "[object Date]" && !isNaN(dateProp.getTime());

    if (!isValidDate) {
        return new Error(`The property ${ propName } of component ${ componentName } is required and must be an instance of Date or is a string with a valid date format (yyyy-mm-dd)`);
    }

    //  no problem
    return null;
};

export default looseDate;