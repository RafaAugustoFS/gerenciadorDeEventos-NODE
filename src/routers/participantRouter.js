const { Router } = require('express');
const ParticipantController = require('../controllers/participantController');

const router = Router();

router.post('/', (req, res) =>{
    ParticipantController.create(req, res)
})

router.put('/:id', (req, res) =>{
    ParticipantController.update(req, res)
})

router.get('/', (req, res) =>{
    ParticipantController.getAll(req, res)
})

router.get('/:id', (req, res) =>{
    ParticipantController.getOne(req, res)
})

router.delete('/:id', (req, res) =>{
    ParticipantController.delete(req, res)
})

router.get('/por-evento/:eventoId', (req, res) =>{
    ParticipantController.getAllParticipantsEvent(req, res)
})


module.exports = router;