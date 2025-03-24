const express = require('express');
const { submitContactForm, getAllContacts } = require('../controllers/contactController');
const router = express.Router();

router.post('/contact', submitContactForm);
router.get('/contacts', getAllContacts); // اختياري لجلب جميع الرسائل

module.exports = router;
