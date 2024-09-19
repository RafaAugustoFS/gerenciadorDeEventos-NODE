const { Router } = require('express');
const participantRouter = require('./participantRouter');
const eventRouter = require('./eventRouter');

const router = Router();

router.use('/participante', participantRouter);
router.use('/evento', eventRouter);

module.exports = router;