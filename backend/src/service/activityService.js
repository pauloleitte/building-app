const Activity = require("../model/Activity");
Activity.updateOptions({new: true, runValidators: true})

module.exports = {

    async create(name, percent) {
        try {
            return await Activity.create({
                name,
                percent
            });
        } catch (e) {
            throw e;
        }
    },

    async findById(id) {
        return await Activity.findById(id)
    },

    async findOneAndDelete(id) {
        return await Activity.findOneAndDelete(id);
    },

    async findOneAndUpdate(id, name, percent) {
        try {
            return await Activity.findOneAndUpdate(id, {
                name,
                percent
            });
        } catch (e) {
            throw e;
        }
    },

    async findAll() {
        return await Activity.find({});
    },

    async findOne(id) {
        return await Activity.findById(id)
    }

}