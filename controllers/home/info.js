import mealDAO from '../../models/meal/dao.js';
import HTTPerror from 'http-errors';

let actualMeal = 0;

const info = async (req, res) => {
    try {
        const meals = await mealDAO.mealDetailByFoodId(req.params.id);
        let mealById = meals[actualMeal]

        if (actualMeal === 0) {actualMeal = 1} else {actualMeal = 0}

        res.json(mealById);
    } catch(error) {
        console.log(error);
    }
}

export default info;