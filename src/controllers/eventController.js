const Event = require("../models/event");

const EventController = {
  create: async (req, res) => {
    try {
      const { nome, data, localizacao } = req.body;

      console.log(nome, data, localizacao);

      const eventCreated = await Event.create({ nome, data, localizacao });

      return res.status(200).json({
        msg: "Evento Criado!",
        event: eventCreated,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte!" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, data, localizacao } = req.body;

      console.log("Atualizando o evento");
      console.log(id);
      console.log({ nome, data, localizacao });

      const eventUpdated = await Event.findByPk(id);

      if (eventUpdated === null) {
        return res.status(404).json({
          msg: "Evento não encontrado",
        });
      }
      const updated = await userUpdate.update({
        nome,
        data,
        localizacao,
      });

      if (updated) {
        return res.status(200).json({
          msg: "Evento atualizado com sucesso",
        });
      }
      return res.status(500).json({
        msg: "Erro ao atualizar o evento",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte!" });
    }
  },
  getAll: async (req, res) => {
    try {
      const eventos = await Event.findAll();

      return res.status(200).json({
        msg: "Eventos encontrados! ",
        event: eventos,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte!" });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;

      const eventoEncontrado = await Event.findByPk(id);

      if (eventoEncontrado == null) {
        return res.status(404).json({
          msg: "Id inexistente!",
        });
      }
      return res.status(200).json({
        msg: "Evento encontrado com sucesso!",
        evento: eventoEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte!" });
    }
  },
  delete: async (req, res) => {
    try {
        const { id } = req.params;
        const eventoEncontrado = await User.findByPk(id);
        if (eventoEncontrado == null) {
          return res.status(200).json({
            msg: " Evento não encontrado!",
          });
        }
        await eventoEncontrado.destroy(); 

        return res.status(200).json({
            msg: "Evento deletado!",
            evento: eventoEncontrado
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Acione o suporte!"
        });
    }
  },
  getAllParticipants: async(req, res) =>{
    try {
        const { id } = req.params;
    } catch (error) {
        
    }
  }
};
module.exports = EventController;
