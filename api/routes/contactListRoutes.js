'use strict';
module.exports = function(app) {
    const contactList = require('../controllers/contactListController');

    // contactList Routes
    app.route('/contacts')
        .get(contactList.list_all_contacts)
        .post(contactList.create_a_contact);


    app.route('/contact/:contactId')
        .get(contactList.read_a_contact)
        .put(contactList.update_a_contact)
        .delete(contactList.delete_a_contact);
};
