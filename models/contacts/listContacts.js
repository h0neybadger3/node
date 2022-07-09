const fs = require('fs/promises');
const filePath = require('./filePath');
console.log(filePath);

const listContacts = async () => {
    const data = await fs.readFile(filePath);
    const products = JSON.parse(data);
    return products;
};

module.exports = listContacts;
