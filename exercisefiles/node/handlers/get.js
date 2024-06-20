module.exports = (query, res) => {
    const { key } = query;
    if (!key) {
        res.end('key not passed');
    } else {
        res.end(`Hello ${key}`);
    }
};