const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mailController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', mailController.createMail);
router.get('/', authMiddleware, mailController.getAllMails);
router.get('/:id', authMiddleware, mailController.getMailById);
router.delete('/:id', authMiddleware, mailController.deleteMail);

module.exports = router;
