const Ticket = require('../models/ticket');
const { ticketStatusMap } = require('../utils/ticket');

exports.createTicket = async (req, res) => {
    const ticket = new Ticket({
        userId: req.body.userId,
        content: req.body.content,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: ticketStatusMap.UNRESOLVED
    });

    await ticket.save();

    res.json({ message: 'ticket created' });
};

exports.deleteTicket = async (req, res) => {
    await Ticket.deleteOne({ _id: req.params.ticketId });
    res.json({message: 'Ticket has been deleted.'});
};

exports.describeTicket = async (req, res) => {
    const ticket = await Ticket.findOne({ _id: req.params.ticketId });
    res.json(ticket);
};