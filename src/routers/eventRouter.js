const { Router } = require('express');
const EventController = require('../controllers/eventController');
const ParticipantController = require('../controllers/participantController');

const router = Router();

router.post('/', (req, res) =>{
    EventController.create(req, res)
})

router.put('/:id', (req, res) =>{
    EventController.update(req, res)
})

router.get('/', (req, res) =>{
    EventController.getAll(req, res)
})

router.get('/:id', (req, res) =>{
    EventController.getOne(req, res)
})

router.delete('/:id', (req, res) =>{
    EventController.delete(req, res)
})

router.get('/:id/participante', (req, res) =>{
    ParticipantController.getAllParticipants(req, res)
})

module.exports = router;