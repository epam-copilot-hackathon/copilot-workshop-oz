// create additional method which will calculate days between two days. It should receive two dates in format YYYY-MM-DD and return the number of days between them.
// example: http://localhost:3000//DaysBetweenDates?start=2020-01-01&end=2020-01-10
// it should verify if the dates are passed and return "dates not passed" if not
// it should return the number of days between the two dates
// it should return "invalid date" if the dates are not in the correct format
// it should return "end date should be greater than start date" if the end date is less than the start date
// it should return "method not supported" if the url has other methods
// it should return "days between dates" if the dates are passed and are in the correct format
// it should return "10" if the start date is 2020-01-01 and the end date is 2020-01-10


module.exports = (query, res) => {
    const { start, end } = query;
    if (!start || !end) {
        res.end('dates not passed');
    } else if (!isValidDate(start) || !isValidDate(end)) {
        res.end('invalid date');
    } else if (end < start) {
        res.end('end date should be greater than start date');
    } else {
        const daysBetween = calculateDaysBetween(start, end);
        res.end(daysBetween.toString());
    }
}

function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
}

function calculateDaysBetween(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
    return diffDays;
}