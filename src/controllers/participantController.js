const Event = require("../models/event");
const Participant = require("../models/participant");

const ParticipantController = {
  create: async (req, res) => {
    try {
      const { nome, email, eventoId } = req.body;

      console.log(nome, email, eventoId);

      const participantCreated = await Participant.create({
        nome,
        email,
        eventoId,
      });

      return res.status(200).json({
        msg: "Evento Criado!",
        participant: participantCreated,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte!" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, eventoId } = req.body;

      console.log("Atualizando o participante!");
      console.log(id);
      console.log({ nome, email, eventoId });

      const participantUpdated = await Participant.findByPk(id);

      if (participantUpdated === null) {
        return res.status(404).json({
          msg: "Participante não encontrado",
        });
      }
      const updated = await userUpdate.update({
        nome,
        email,
        eventoId,
      });

      if (updated) {
        return res.status(200).json({
          msg: "Participante atualizado com sucesso",
        });
      }
      return res.status(500).json({
        msg: "Erro ao atualizar o participante",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte!" });
    }
  },
  getAll: async (req, res) => {
    try {
      const participantes = await Participant.findAll();

      return res.status(200).json({
        msg: "Participantes encontrados! ",
        participantes: participantes,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte!" });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;

      const participanteEncontrado = await Participant.findByPk(id);

      if (participanteEncontrado == null) {
        return res.status(404).json({
          msg: "Id inexistente!",
        });
      }
      return res.status(200).json({
        msg: "Evento encontrado com sucesso!",
        participant: participanteEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte!" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const participanteEncontrado = await Participant.findByPk(id);
      if (participanteEncontrado == null) {
        return res.status(200).json({
          msg: " Participante não encontrado!",
        });
      }
      await participanteEncontrado.destroy();

      return res.status(200).json({
        msg: "Evento deletado!",
        participante: participanteEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte!",
      });
    }
  },
  getAllParticipants: async (req, res) => {
    try {
      const { id } = req.params;
      const particantesEncontrados = await Participant.findByPk(id == Event.eventoId);

      return res.status(200).json({
        msg: "Participantes encontrados! ",
        participantes: particantesEncontrados,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte!",
      });
    }
  },
};
module.exports = ParticipantController;
