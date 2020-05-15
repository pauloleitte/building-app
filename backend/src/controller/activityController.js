const activityService = require("../service/activityService")

module.exports = {

    async create(req, res) {
        const {
            name,
            percent
        } = req.body;
        try {
            const activity = await activityService.create(name, percent);
            return res.status(201).json({
                id: activity.id
            });
        } catch (e) {
            return res.status(500).json({
                error: e
            })
        }

    },

    async delete(req, res) {
        const id = req.params.id
        try {
            const exist = await activityService.findById(id);

            if (exist) {
                await activityService.findOneAndDelete(id);
                return res.status(204).send({
                    message: 'Atividade deletada com sucesso.'
                })
            }

            return res.status(400).json({
                message: 'Atividade não localizada.'
            })
            
        } catch (e) {
            return res.status(500).json({
                error: e
            })
        }

    },

    async update(req, res) {
        const {
            name,
            percent
        } = req.body

        const id = req.params.id

        try {
            const exist = await activityService.findById(id)
            
            if (exist) {
                await activityService.findOneAndUpdate(id, name, percent);
                return res.status(204).send({
                message: 'Atividade atualizada com sucesso.'
            })
            }

            return res.status(400).json({
                message: 'Atividade não localizada.'
            })

        } catch (e) {
           return res.status(500).json({
                error: e
            })
        }

    },

    async findAll(req, res) {
        return res.json(await activityService.findAll());
    },

    async findOne(req, res) {
        const id = req.params.id
        return res.json(await activityService.findOne(id))
    }
}