const mongoose = require("mongoose");
require('dotenv').config()


const mongoURI = process.env.MONGO_URI

  const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected!');
      let fetched_data = await mongoose.connection.db.collection("food_items");
      let data=await fetched_data.find({}).toArray() 
      console.log("data fetched!");
      global.food_items = data;

      const foodCategory = await mongoose.connection.db.collection("food_category");

      foodCategory.find({}).toArray(function (err, catData){
        if(err) console.log(err);
        else {
          global.food_category = catData;
        }
      })
      //console.log(global.food_items);

    } catch (error) {
      console.log('err: ', error);
    }
  };

module.exports = mongoDB;
