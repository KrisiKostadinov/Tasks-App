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
    }
}