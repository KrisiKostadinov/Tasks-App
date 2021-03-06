const Task = require('../models/Task');

module.exports = {
    post: {
        async add(req, res) {
            const { title, description } = req.body;

            try {
                const result = await Task.create({
                    title,
                    description,
                });

                res.send(result);
            } catch (error) {
                res.send(error);
            }
        }
    },

    get: {
        async details(req, res) {
            const { id } = req.params;

            const task = await Task.findById({ _id: id });
            res.send(task);
        },

        async all(req, res) {
            const tasks = await Task.find();
            res.send(tasks);
        }
    },

    del: {
        async dismiss(req, res) {
            const { id } = req.params;

            try {
                const task = await Task.findById(id);
                const deletedTask = await task.remove();

                res.send(deletedTask);
            } catch (error) {
                res.send(error);
            }
        }
    }
}