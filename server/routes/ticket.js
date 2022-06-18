const express = require('express');
const router = express.Router();

const ticketController = require('../controllers/ticket');

router.post('/create', ticketController.createTicket);
router.delete('/:ticketId', ticketController.deleteTicket);

module.exports = router;