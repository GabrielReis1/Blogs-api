const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: '"name" is required' });
        }

        const category = await categoryService.createCategory(name);

        return res.status(201).json(category);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createCategory,
};