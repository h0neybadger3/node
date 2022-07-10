const listContacts = require('./listContacts');
const getContactById = require('./getContactById');
const removeContact = require('./removeContact');
const addContact = require('./addContact');
const updateContactById = require('./updateContactById');
const updateFavorite = require('./updateFavorite');

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContactById,
    updateFavorite,
};
