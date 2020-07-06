import connection from '../../db.js';

class MealDAO{

    constructor(){}

    mealDetailByFoodId(foodId, lastMealId){
        console.log('BUSCANDO ID' + foodId)
        return new Promise ( (resolve, reject)=>{
            connection.query(`SELECT * FROM meal WHERE FOOD_ID = ${foodId} ORDER BY MEAL_ID asc`, 
            function (err, rows, fields) {
                if (err)
                    console.log(err);
                    console.log(rows);
                    resolve(rows);
                    
                connection.end();
            });
        })
    }

}

export default new MealDAO();