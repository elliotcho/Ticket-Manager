const mongoose = require('mongoose');
const schema = mongoose.Schema;

const TicketSchema = new schema({
    userId: String,
    content: String,
    createdAt: Date,
    updatedAt: Date,
    status: String
});

// data access object
const Ticket = mongoose.model('ticket', TicketSchema);
module.exports = Ticket;
