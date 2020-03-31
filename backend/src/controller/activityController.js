const Activity = require("../model/Activity");

module.exports = {
    async create(req, res) {
        const {
            name,
            percent
        } = req.body;
        const activity = await Activity.create({
            name,
            percent
        });
        return res.status(201).json({
            id: activity.id
        });

    },
    async delete(req, res) {
        const {
            id
        } = res.body
        const exist = await Activity.findById(id)
        if (exist) {
            await Activity.findByIdAndDelete(id);
            return res.status(204);
        }
        return res.status(400).json({
            message: 'Atividade não localizada.'
        })
    },
    async update(req, res) {
        const {
            id,
            name,
            percent
        } = res.body
        const exist = await Activity.findById(id)
        if (exist) {
            await Activity.findByIdAndUpdate(id, {
                name,
                percent
            });
            return res.status(204);
        }
        return res.status(400).json({
            message: 'Atividade não localizada.'
        })
    },
    async find(req, res) {
        const activity = await Activity.find({});
        return res.json(activity);
    }
}