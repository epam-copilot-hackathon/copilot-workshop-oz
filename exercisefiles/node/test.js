//write npm command line to install mocha
//npm install --global mocha

//command to run this test file
//mocha test.js

const axios = require('axios');
const assert = require('assert');
const http = require('http');
const server = require('./nodeserver');

describe('Node Server', () => {


    //add test to check get when key is equal to world
    it('should return "Hello world!" if key is equal to "world"', (done) => {
        http
        .get('http://localhost:3000/get?key=world' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'Hello world');
                done();
            });
        });
    });


    it('should return "Hello key" when key is passed', async function () {
        const response = await axios.get('http://localhost:3000/get?key=test');
        assert.strictEqual(response.data, 'Hello test');
    });

    it('should return "key not passed" when key is not passed', async function () {
        const response = await axios.get('http://localhost:3000/get');
        assert.strictEqual(response.data, 'key not passed');
    });

    it('should return "method not supported" for non-supported methods', async function () {
        try {
            await axios.post('http://localhost:3000/post');
        } catch (error) {
            assert.strictEqual(error.response.data, 'method not supported');
        }
    });

    it('should return "Hello key" when key is non-ascii', async function () {
        const response = await axios.get('http://localhost:3000/get?key=тест');
        assert.strictEqual(response.data, 'Hello тест');
    });


    //add test to check validatephoneNumber

    //write test to validate validateSpanishDNI
   

    //write test for returnColorCode red should return code #FF0000


    // write test for daysBetweenDates
    // write test for daysBetweenDates with invalid date
    // write test for daysBetweenDates with end date less than start date
    // write test for daysBetweenDates with valid dates
    // write test for daysBetweenDates with invalid method
    // write test for daysBetweenDates with no dates passed
    // write test for daysBetweenDates with no start date passed
    // write test for daysBetweenDates with no end date passed
    // write test for daysBetweenDates with invalid date format
    // write test for daysBetweenDates with valid date format
    // write test for daysBetweenDates with invalid date format for start date
    // write test for daysBetweenDates with invalid date format for end date
    // write test for daysBetweenDates with invalid date format for both dates
    // write test for daysBetweenDates with valid date format for both dates
    // write test for daysBetweenDates with end date less than start date
    // write test for daysBetweenDates with end date equal to start date
    // write test for daysBetweenDates with end date greater than start date
    // write test for daysBetweenDates with end date greater than start date by 1 day
    // write test for daysBetweenDates with end date greater than start date by 1 month
    // write test for daysBetweenDates with end date greater than start date by 1 year

    it('should return a number', async function () {
        const startDate = '2022-01-01';
        const endDate = '2022-01-10';
        const response = await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}&end=${endDate}`);
        assert.strictEqual(typeof response.data, 'number');
      });

    it('should return the number of days between two valid dates', async function () {
        const startDate = '2022-01-01';
        const endDate = '2022-01-10';
        const response = await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}&end=${endDate}`);
        assert.strictEqual(response.data, 9);
    });

    it('should return an error message for invalid date format', async function () {
        const startDate = '2022-01-01';
        const endDate = '2022-01-';
        try {
            await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}&end=${endDate}`);
        } catch (error) {
            assert.strictEqual(error.response.data, 'Invalid date format');
        }
    });

    it('should return an error message for end date less than start date', async function () {
        const startDate = '2022-01-10';
        const endDate = '2022-01-01';
        try {
            await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}&end=${endDate}`);
        } catch (error) {
            assert.strictEqual(error.response.data, 'End date cannot be less than start date');
        }
    });

    it('should return an error message for invalid method', async function () {
        try {
            await axios.post('http://localhost:3000/daysBetweenDates');
        } catch (error) {
            assert.strictEqual(error.response.data, 'Method not supported');
        }
    });

    it('should return an error message for missing start date', async function () {
        const endDate = '2022-01-10';
        try {
            await axios.get(`http://localhost:3000/daysBetweenDates?end=${endDate}`);
        } catch (error) {
            assert.strictEqual(error.response.data, 'Start date is required');
        }
    });

    it('should return an error message for missing end date', async function () {
        const startDate = '2022-01-01';
        try {
            await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}`);
        } catch (error) {
            assert.strictEqual(error.response.data, 'End date is required');
        }
    });

    it('should return an error message for missing both start and end dates', async function () {
        try {
            await axios.get('http://localhost:3000/daysBetweenDates');
        } catch (error) {
            assert.strictEqual(error.response.data, 'Start and end dates are required');
        }
    });

    it('should return an error message for invalid date format for start date', async function () {
        const startDate = '2022-01-';
        const endDate = '2022-01-10';
        try {
            await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}&end=${endDate}`);
        } catch (error) {
            assert.strictEqual(error.response.data, 'Invalid date format for start date');
        }
    });

    it('should return an error message for invalid date format for end date', async function () {
        const startDate = '2022-01-01';
        const endDate = '2022-01-';
        try {
            await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}&end=${endDate}`);
        } catch (error) {
            assert.strictEqual(error.response.data, 'Invalid date format for end date');
        }
    });

    it('should return an error message for invalid date format for both start and end dates', async function () {
        const startDate = '2022-01-';
        const endDate = '2022-01-';
        try {
            await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}&end=${endDate}`);
        } catch (error) {
            assert.strictEqual(error.response.data, 'Invalid date format for start and end dates');
        }
    });

    it('should return the number of days between two valid dates (end date greater than start date)', async function () {
        const startDate = '2022-01-01';
        const endDate = '2022-01-10';
        const response = await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}&end=${endDate}`);
        assert.strictEqual(response.data, 9);
    });

    it('should return the number of days between two valid dates (end date equal to start date)', async function () {
        const startDate = '2022-01-01';
        const endDate = '2022-01-01';
        const response = await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}&end=${endDate}`);
        assert.strictEqual(response.data, 0);
    });

    it('should return the number of days between two valid dates (end date greater than start date by 1 day)', async function () {
        const startDate = '2022-01-01';
        const endDate = '2022-01-02';
        const response = await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}&end=${endDate}`);
        assert.strictEqual(response.data, 1);
    });

    it('should return the number of days between two valid dates (end date greater than start date by 1 month)', async function () {
        const startDate = '2022-01-01';
        const endDate = '2022-02-01';
        const response = await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}&end=${endDate}`);
        assert.strictEqual(response.data, 31);
    });

    it('should return the number of days between two valid dates (end date greater than start date by 1 year)', async function () {
        const startDate = '2022-01-01';
        const endDate = '2023-01-01';
        const response = await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}&end=${endDate}`);
        assert.strictEqual(response.data, 365);
    });

    // write test for daysBetweenDates with end date greater than start date by 1 year in a leap year
    it('should return the number of days between two valid dates (end date greater than start date by 1 year in a leap year)', async function () {
        const startDate = '2024-02-28';
        const endDate = '2025-02-28';
        const response = await axios.get(`http://localhost:3000/daysBetweenDates?start=${startDate}&end=${endDate}`);
        assert.strictEqual(response.data, 366);
    });

});
