import mealDAO from '../../models/meal/dao.js';
import HTTPerror from 'http-errors';

let actualId;

const info = async (req, res) => {
    try {
        const meals = await mealDAO.mealDetailByFoodId(req.params.id);
        let mealById;
        const routeId = req.params.id;
        for(let meal of meals) {
            if (meal.id == routeId) {
                mealById = meal;
            }
        }
        res.json(mealById);
    } catch(error) {
        next(HTTPerror(error.code, {message: err.message}));
    }
}

export default info;